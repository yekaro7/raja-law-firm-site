// Fix: Import React to provide types for JSX and React components.
import React from 'react';

export type Page = 'home' | 'about' | 'services' | 'team' | 'blog' | 'blogPost' | 'faq' | 'contact' | 'paidConsultation' | 'privacy' | 'login' | 'portal' | 'admin';

export type Language = 'en' | 'ur';

export interface BilingualContent {
  en: string;
  ur: string;
}

export interface TeamMember {
  id: number;
  name: BilingualContent;
  title: BilingualContent;
  bio: BilingualContent;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: BilingualContent;
  author: BilingualContent;
  company: BilingualContent;
}

export interface BlogPost {
  id: number;
  title: BilingualContent;
  excerpt: BilingualContent;
  content: BilingualContent;
  author: string;
  date: string;
  image: string;
  category: BilingualContent;
}

export interface FAQItem {
  id: number;
  question: BilingualContent;
  answer: BilingualContent;
}

export interface Service {
  id: string;
  title: BilingualContent;
  description: BilingualContent;
  // Fix: Changed JSX.Element to React.ReactElement to avoid dependency on global JSX namespace.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// --- Client Portal Types ---

export type CaseStatus = 'Active' | 'Closed' | 'Hearing Scheduled' | 'Decision';

export interface CaseDetails {
    id: string;
    title: BilingualContent;
    status: CaseStatus;
    nextHearingDate: string | null;
    assignedLawyer: {
        name: string;
        avatar: string;
    };
    timeline: {
        stage: BilingualContent;
        date: string;
        completed: boolean;
    }[];
}

export interface Payment {
    id: string;
    date: string;
    amount: number;
    method: 'JazzCash' | 'Easypaisa' | 'Bank Transfer';
    receiptUrl: string;
}

export interface FeeSummary {
    total: number;
    paid: number;
    remaining: number;
    installments: Payment[];
}

export interface Document {
    id: string;
    name: string;
    type: 'PDF' | 'DOCX' | 'JPG';
    uploadedBy: 'Client' | 'Firm';
    timestamp: string;
    url: string;
}

export interface PortalMessage {
    id: string;
    sender: 'client' | 'lawyer';
    text: string;
    timestamp: string;
    read: boolean;
    attachment?: {
        name: string;
        url: string;
    };
}

export type NotificationType = 'message' | 'document' | 'payment' | 'hearing';
export interface PortalNotification {
    id: string;
    type: NotificationType;
    content: BilingualContent;
    timestamp: string;
    read: boolean;
}


export interface ClientUser {
    id: string; // This will now be the Appwrite Document ID
    appwriteUserId: string; // This links to the Appwrite Auth User ID
    name: string;
    email: string;
    cnic: string;
    clientType: 'Consultation' | 'Service';
    isVerified: boolean;
    hasPortalAccess: boolean;
    isTemporaryPassword: boolean;
    tempPasswordExpiry: string | null; // ISO string
    caseDetails: CaseDetails;
    fees: FeeSummary;
    documents: Document[];
    messages: PortalMessage[];
    notifications: PortalNotification[];
}

// --- Admin Dashboard Types ---
export interface AdminConsultation {
  id: string;
  clientName: string;
  lawyer: string;
  dateTime: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export type PaymentVerificationStatus = 'Pending' | 'Verified';

export interface ConsultationPayment {
    id: string;
    paymentType: 'consultation';
    clientName: string;
    paymentDate: string;
    amount: number;
    tid: string;
    status: PaymentVerificationStatus;
}

export interface CasePayment {
    id: string;
    paymentType: 'caseService';
    clientName: string;
    caseTitle: string;
    installment: number;
    paymentDate: string;
    amount: number;
    remainingBalance: number;
    status: PaymentVerificationStatus;
}

export type AdminPayment = ConsultationPayment | CasePayment;