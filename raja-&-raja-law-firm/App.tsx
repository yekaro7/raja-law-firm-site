import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Page, BlogPost, Language } from './types';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext, Theme } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { blogPosts } from './constants/blog';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PaidConsultationPage from './pages/PaidConsultationPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import PortalLayout from './pages/portal/PortalLayout';
import AdminLayout from './pages/admin/AdminLayout';

const AppContent: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { user } = useAuth();
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [mainPage, subRoute] = useMemo(() => {
    const hashParts = currentHash.substring(1).split('/');
    return [hashParts[0] || 'home', hashParts[1] || null];
  }, [currentHash]);

  const handleNavigate = useCallback((page: Page, postId?: number) => {
    let newHash = `#${page}`;
    if (page === 'blogPost' && postId) {
      newHash += `/${postId}`;
    }
    window.location.hash = newHash;
  }, []);

  const { language } = React.useContext(LanguageContext);
  const direction = language === 'ur' ? 'rtl' : 'ltr';

  // --- Routing Logic ---
  if (mainPage === 'login') {
    return <LoginPage onNavigate={handleNavigate} />;
  }
  
  if (mainPage === 'portal') {
    if (user) {
      return <PortalLayout />;
    } else {
      // Redirect to login if not authenticated
      window.location.hash = '#login';
      return null;
    }
  }
  
  if (mainPage === 'admin') {
    // For now, allow direct access. In a real app, this would be protected by an admin auth check.
    return <AdminLayout />;
  }


  const renderPage = () => {
    const page = mainPage as Page;
    switch (page) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage onNavigate={handleNavigate} />;
      case 'team': return <TeamPage />;
      case 'blog': return <BlogPage onNavigate={handleNavigate} />;
      case 'blogPost':
        const postId = parseInt(subRoute || '', 10);
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
          return <BlogPostPage post={post} onNavigate={handleNavigate} />;
        }
        return <BlogPage onNavigate={handleNavigate} />;
      case 'faq': return <FaqPage />;
      case 'contact': return <ContactPage />;
      case 'paidConsultation': return <PaidConsultationPage onNavigate={handleNavigate} />;
      case 'privacy': return <PrivacyPage />;
      default:
        // Fallback to home for any unknown hash
        window.location.hash = '#home';
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div dir={direction} className={`${language === 'ur' ? 'font-urdu' : 'font-sans'} bg-white dark:bg-charcoal text-charcoal dark:text-gray-200 min-h-screen flex flex-col transition-colors duration-400`}>
      <Header activePage={mainPage as Page} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Chatbot />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};


const App: React.FC = () => {
  // 🔹 Appwrite client initialization is now handled by AuthProvider
  // to keep all authentication logic in one place.
  
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setThemeState] = useState<Theme>('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    setThemeState(storedTheme || 'light');
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
  }, [theme]);

  const languageContextValue = useMemo(() => ({ language, setLanguage }), [language]);
  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <AuthProvider>
      <ThemeContext.Provider value={themeContextValue}>
        <LanguageContext.Provider value={languageContextValue}>
          <AppContent />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
};

export default App;