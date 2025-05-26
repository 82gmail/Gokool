import { Vendor, Order, Complaint, EscalationDetails, DashboardStats } from '../types';

export const mockVendors: Vendor[] = [
  {
    id: '1',
    ownerName: 'Rajesh Kumar',
    shopName: 'Fresh Mart',
    phoneNumber: '9876543210',
    address: '123 Market Street, Mumbai',
    category: 'Grocery',
    documents: {
      panCard: 'uploaded',
      aadharCard: 'uploaded',
      gstCertificate: 'uploaded',
      fssaiLicense: 'uploaded',
    },
    businessHours: {
      opening: '08:00',
      closing: '20:00',
    },
    status: 'active',
    lastActive: '2 mins ago',
  },
  {
    id: '2',
    ownerName: 'Suresh Patel',
    shopName: 'Grocery Hub',
    phoneNumber: '8765432109',
    address: '456 Main Road, Delhi',
    category: 'Grocery',
    documents: {
      panCard: 'uploaded',
      aadharCard: 'uploaded',
      gstCertificate: 'uploaded',
    },
    businessHours: {
      opening: '09:00',
      closing: '21:00',
    },
    status: 'active',
    lastActive: '5 mins ago',
  },
  {
    id: '3',
    ownerName: 'Amit Singh',
    shopName: 'Daily Needs',
    phoneNumber: '7654321098',
    address: '789 Park Avenue, Bangalore',
    category: 'Convenience',
    documents: {
      panCard: 'uploaded',
      aadharCard: 'uploaded',
    },
    businessHours: {
      opening: '07:00',
      closing: '22:00',
    },
    bankDetails: {
      accountNumber: '1234567890',
      ifscCode: 'ABCD0001234',
    },
    status: 'inactive',
    lastActive: '1 hour ago',
  },
];

export const mockOrders: Order[] = [
  {
    id: '1',
    orderId: 'ORD001',
    vendorName: 'Fresh Mart',
    amount: 2450,
    status: 'pending',
    date: '2025-05-22',
  },
  {
    id: '2',
    orderId: 'ORD002',
    vendorName: 'Grocery Hub',
    amount: 1890,
    status: 'processing',
    date: '2025-05-22',
  },
  {
    id: '3',
    orderId: 'ORD003',
    vendorName: 'Daily Needs',
    amount: 3200,
    status: 'completed',
    date: '2025-05-22',
  },
];

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    complaintId: 'CMP12456',
    customerName: 'Shiv Diwedi',
    orderId: 'GOK1023',
    date: '22 May, 2025',
    time: '2:47 PM',
    issue: 'Late Delivery',
    status: 'pending',
  },
  {
    id: '2',
    complaintId: 'CMP12457',
    customerName: 'Priya Sharma',
    orderId: 'GOK1024',
    date: '22 May, 2025',
    time: '1:30 PM',
    issue: 'Missing Item',
    status: 'in-review',
  },
  {
    id: '3',
    complaintId: 'CMP12458',
    customerName: 'Rahul Verma',
    orderId: 'GOK1025',
    date: '22 May, 2025',
    time: '11:15 AM',
    issue: 'Rude Behaviour',
    status: 'resolved',
  },
];

export const mockEscalation: EscalationDetails = {
  issue: {
    id: 'CMP12456',
    type: 'Late Delivery',
  },
  orderId: 'GOK1023',
  customer: 'Shiv Diwedi',
  vendor: 'Shree Krishna Store',
  deliveryPartner: 'Rahul Yadav',
  deliveryTime: '68 mins',
  date: '21 May, 2025',
  summary: 'Order marked delivered late. Customer unhappy, vendor denied delay.',
  notes: [],
  isEscalated: true,
};

export const mockDashboardStats: DashboardStats = {
  ordersToday: 143,
  revenueToday: 58920,
  activeVendors: 126,
  complaintsToday: 7,
};