import { ClientUser } from '../types';

// Set expiry to 24 hours from now for the temporary password
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 1);

export const mockClientUser: ClientUser = {
  id: 'CLI-001',
  // Fix: Added missing appwriteUserId to match ClientUser type
  appwriteUserId: 'mock-appwrite-user-id-for-demo',
  name: 'Ahmed Hassan',
  email: 'ahmed.hassan@example.com',
  cnic: '35202-1234567-1',
  clientType: 'Service',
  isVerified: false, // Becomes true after first password change
  hasPortalAccess: true,
  isTemporaryPassword: true, // Requires password change on first login
  tempPasswordExpiry: expiryDate.toISOString(),
  caseDetails: {
    id: 'CS-2023-101',
    title: { en: 'Ahmed Hassan vs. Premier Textiles', ur: 'احمد حسن بنام پریمیئر ٹیکسٹائلز' },
    status: 'Hearing Scheduled',
    nextHearingDate: '2023-12-15T10:00:00Z',
    assignedLawyer: {
      name: 'Ahmad Raza Raja',
      avatar: 'https://picsum.photos/seed/lawyer1/100/100',
    },
    timeline: [
      { stage: { en: 'Case Filed', ur: 'کیس دائر کیا گیا' }, date: '2023-09-01', completed: true },
      { stage: { en: 'Initial Review', ur: 'ابتدائی جائزہ' }, date: '2023-09-05', completed: true },
      { stage: { en: 'First Hearing', ur: 'پہلی سماعت' }, date: '2023-10-20', completed: true },
      { stage: { en: 'Evidence Submission', ur: 'شواہد جمع کرانا' }, date: '2023-11-10', completed: true },
      { stage: { en: 'Next Hearing', ur: 'اگلی سماعت' }, date: '2023-12-15', completed: false },
      { stage: { en: 'Final Arguments', ur: 'حتمی دلائل' }, date: 'N/A', completed: false },
      { stage: { en: 'Decision', ur: 'فیصلہ' }, date: 'N/A', completed: false },
    ],
  },
  fees: {
    total: 200000,
    paid: 100000,
    remaining: 100000,
    installments: [
      { id: 'INV-001', date: '2023-09-01', amount: 50000, method: 'Bank Transfer', receiptUrl: '#' },
      { id: 'INV-002', date: '2023-10-15', amount: 50000, method: 'JazzCash', receiptUrl: '#' },
    ],
  },
  documents: [
    { id: 'DOC-001', name: 'Power of Attorney.pdf', type: 'PDF', uploadedBy: 'Client', timestamp: '2023-09-02T14:00:00Z', url: '#' },
    { id: 'DOC-002', name: 'Employment Contract.pdf', type: 'PDF', uploadedBy: 'Client', timestamp: '2023-09-02T14:05:00Z', url: '#' },
    { id: 'DOC-003', name: 'Case Filing Report.pdf', type: 'PDF', uploadedBy: 'Firm', timestamp: '2023-09-06T11:00:00Z', url: '#' },
    { id: 'DOC-004', name: 'Court Notice.jpg', type: 'JPG', uploadedBy: 'Firm', timestamp: '2023-10-18T09:30:00Z', url: '#' },
  ],
  messages: [
    { id: 'MSG-001', sender: 'lawyer', text: 'Mr. Hassan, we have received your documents. We will review them and get back to you shortly.', timestamp: '2023-09-02T15:00:00Z', read: true },
    { id: 'MSG-002', sender: 'client', text: 'Thank you. Please let me know if anything else is required from my end.', timestamp: '2023-09-02T15:10:00Z', read: true },
    { id: 'MSG-003', sender: 'lawyer', text: 'Not at the moment. We have filed the case and the initial report is now available in the documents section for your review.', timestamp: '2023-09-06T11:05:00Z', read: true },
    { id: 'MSG-004', sender: 'lawyer', text: 'Just a reminder that your next hearing is scheduled for December 15th, 2023.', timestamp: '2023-11-30T10:00:00Z', read: false },
  ],
  notifications: [
      { id: 'NOTIF-001', type: 'document', content: {en: 'A new document "Case Filing Report.pdf" was uploaded by the firm.', ur: 'فرم کی طرف سے ایک نئی دستاویز "کیس فائلنگ رپورٹ.pdf" اپ لوڈ کی گئی ہے۔'}, timestamp: '2023-09-06T11:00:00Z', read: true },
      { id: 'NOTIF-002', type: 'hearing', content: {en: 'A new hearing has been scheduled for your case.', ur: 'آپ کے کیس کے لیے ایک نئی سماعت مقرر کی گئی ہے۔'}, timestamp: '2023-10-18T09:30:00Z', read: true },
      { id: 'NOTIF-003', type: 'message', content: {en: 'You have a new message from your lawyer.', ur: 'آپ کے وکیل کی طرف سے ایک نیا پیغام ہے۔'}, timestamp: '2023-11-30T10:00:00Z', read: false },
  ]
};