import { AdminConsultation, ConsultationPayment, CasePayment } from '../types';

export const adminStats = [
  {
    key: 'admin_card_active_clients',
    value: 124,
  },
  {
    key: 'admin_card_pending_consultations',
    value: 8,
  },
  {
    key: 'admin_card_verified_case_payments',
    value: 'PKR 850K',
  },
  {
    key: 'admin_card_total_revenue',
    value: 'PKR 1.2M',
  },
];

export const recentConsultations: AdminConsultation[] = [
  {
    id: 'CON-001',
    clientName: 'Fatima Ahmed',
    lawyer: 'Ahmad Raza Raja',
    dateTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    status: 'Pending',
  },
  {
    id: 'CON-002',
    clientName: 'Bilal Khan',
    lawyer: 'Sana Javed',
    dateTime: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    status: 'Completed',
  },
  {
    id: 'CON-003',
    clientName: 'Ayesha Malik',
    lawyer: 'Fatima Ali Khan',
    dateTime: new Date(Date.now() + 172800000).toISOString(), // In 2 days
    status: 'Confirmed',
  },
  {
    id: 'CON-004',
    clientName: 'Usman Ghani',
    lawyer: 'Ahmad Raza Raja',
    dateTime: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    status: 'Cancelled',
  },
  {
    id: 'CON-005',
    clientName: 'Zain Abdullah',
    lawyer: 'Bilal Hussain',
    dateTime: new Date(Date.now() + 259200000).toISOString(), // In 3 days
    status: 'Pending',
  },
];


export const caseStatusData = [
  { name: 'Active', value: 75, color: 'bg-blue-500' },
  { name: 'Hearing Scheduled', value: 25, color: 'bg-yellow-500' },
  { name: 'Decision', value: 15, color: 'bg-green-500' },
  { name: 'Closed', value: 90, color: 'bg-gray-500' },
];

export const consultationPaymentsData: ConsultationPayment[] = [
    { id: 'PAY-C001', paymentType: 'consultation', clientName: 'Ali Raza', paymentDate: '2023-10-25', amount: 5000, tid: '843651823651', status: 'Pending' },
    { id: 'PAY-C002', paymentType: 'consultation', clientName: 'Sana Javed', paymentDate: '2023-10-24', amount: 5000, tid: '251836512345', status: 'Verified' },
    { id: 'PAY-C003', paymentType: 'consultation', clientName: 'Kamran Malik', paymentDate: '2023-10-24', amount: 5000, tid: '751236598745', status: 'Verified' },
    { id: 'PAY-C004', paymentType: 'consultation', clientName: 'Hina Tariq', paymentDate: '2023-10-23', amount: 5000, tid: '159875321456', status: 'Pending' },
    { id: 'PAY-C005', paymentType: 'consultation', clientName: 'Faisal Khan', paymentDate: '2023-10-22', amount: 5000, tid: '357895123654', status: 'Verified' },
];

export const casePaymentsData: CasePayment[] = [
    { id: 'PAY-S001', paymentType: 'caseService', clientName: 'Ahmed Hassan', caseTitle: 'Hassan vs. Premier Textiles', installment: 2, paymentDate: '2023-10-15', amount: 50000, remainingBalance: 100000, status: 'Verified' },
    { id: 'PAY-S002', paymentType: 'caseService', clientName: 'Maria Khan', caseTitle: 'Khan vs. Dynamic Corp', installment: 1, paymentDate: '2023-10-12', amount: 75000, remainingBalance: 125000, status: 'Pending' },
    { id: 'PAY-S003', paymentType: 'caseService', clientName: 'Tariq Ali', caseTitle: 'Ali vs. Lahore Board', installment: 4, paymentDate: '2023-10-10', amount: 25000, remainingBalance: 25000, status: 'Verified' },
    { id: 'PAY-S004', paymentType: 'caseService', clientName: 'Zoya Abbas', caseTitle: 'Abbas vs. United Bank', installment: 2, paymentDate: '2023-10-08', amount: 100000, remainingBalance: 300000, status: 'Verified' },
    { id: 'PAY-S005', paymentType: 'caseService', clientName: 'Imran Bhatti', caseTitle: 'Bhatti vs. Education Dept.', installment: 3, paymentDate: '2023-10-05', amount: 40000, remainingBalance: 80000, status: 'Pending' },
];
