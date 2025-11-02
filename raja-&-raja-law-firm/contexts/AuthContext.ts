import React, { createContext, useState, useContext, useEffect } from 'react';
import { Client, Account, Databases, ID, Query, Models } from 'appwrite';
import { ClientUser } from '../types';

// --- Appwrite Configuration ---
// ❗️ IMPORTANT: These values MUST match your Appwrite project credentials.
// The white screen issue is caused by incorrect placeholders here.
// Find these in your Appwrite Console:
// - Project ID: In Project Settings
// - Database ID & Collection ID: In the Databases section
const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "6907506a00264ae2edba";
const APPWRITE_DATABASE_ID = '690753e9002234f31c23';
const APPWRITE_COLLECTION_ID_CLIENTS = '690754050017409b33c3';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

// --- Auth Context Interface ---
interface IAuthContext {
  user: ClientUser | null;
  login: (email: string, pass: string) => Promise<'success' | 'invalid' | 'expired'>;
  logout: () => void;
  changePassword: (newPass: string) => Promise<boolean>;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: async () => 'invalid',
  logout: () => {},
  changePassword: async () => false,
  isLoading: true,
});

// --- Auth Provider Component ---
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentUser = await account.get();
        await loadClientData(currentUser.$id);
      } catch (error) {
        // No session found
        console.log("No active Appwrite session.");
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  // Fetches detailed client data from the database
  const loadClientData = async (appwriteUserId: string) => {
    try {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID_CLIENTS,
        [Query.equal('appwriteUserId', appwriteUserId), Query.limit(1)]
      );
      
      if (response.documents.length > 0) {
        // Found the client profile, setting user state
        const clientData = response.documents[0] as unknown as ClientUser;
        clientData.id = response.documents[0].$id; // Use Appwrite document ID
        setUser(clientData);
      } else {
        // This case should ideally not happen for a valid user
        throw new Error("Client profile not found in database.");
      }
    } catch (error) {
      console.error("Failed to load client data:", error);
      // Log out to clear any partial login state
      await logout();
    }
  };

  const login = async (email: string, pass: string): Promise<'success' | 'invalid' | 'expired'> => {
    try {
      await account.createEmailPasswordSession(email, pass);
      const currentUser = await account.get();
      await loadClientData(currentUser.$id);
      return 'success';
    } catch (error) {
      console.error("Appwrite login error:", error);
      return 'invalid';
    }
  };
  
  const changePassword = async (newPass: string): Promise<boolean> => {
    if (user && user.isTemporaryPassword) {
      try {
        // The old password for a temporary user is 'password123' as per the mock logic
        await account.updatePassword(newPass, 'password123');

        // Update the database document to reflect password change
        await databases.updateDocument(
          APPWRITE_DATABASE_ID,
          APPWRITE_COLLECTION_ID_CLIENTS,
          user.id, // This is the Appwrite document ID
          {
            isTemporaryPassword: false,
            isVerified: true,
            tempPasswordExpiry: null,
          }
        );
        
        // Refresh local user state
        setUser(prevUser => prevUser ? { ...prevUser, isTemporaryPassword: false, isVerified: true, tempPasswordExpiry: null } : null);
        return true;
      } catch (error) {
        console.error("Appwrite password change error:", error);
        return false;
      }
    }
    // Handle password change for non-temporary users if needed (would require 'current password' input)
    return false;
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
        console.error("Appwrite logout error:", error);
    } finally {
        setUser(null);
        window.location.hash = '#login';
    }
  };

  return React.createElement(AuthContext.Provider, { value: { user, login, logout, changePassword, isLoading } }, children);
};

export const useAuth = () => useContext(AuthContext);