export interface Vendor {
  id: string;
  ownerName: string;
  shopName: string;
  phoneNumber: string;
  address: string;
  category: string;
  documents: {
    panCard?: string;
    aadharCard?: string;
    gstCertificate?: string;
    fssaiLicense?: string;
  };
  businessHours: {
    opening: string;
    closing: string;
  };
  bankDetails?: {
    accountNumber: string;
    ifscCode: string;
  };
  status: 'active' | 'inactive';
  lastActive?: string;
}

export interface Order {
  id: string;
  orderId: string;
  vendorName: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed';
  date: string;
}

export interface Complaint {
  id: string;
  complaintId: string;
  customerName: string;
  orderId: string;
  date: string;
  time: string;
  issue: 'Late Delivery' | 'Missing Item' | 'Rude Behaviour' | 'Payment Dispute' | 'Vendor Issue' | 'Service Delay';
  status: 'pending' | 'in-review' | 'resolved';
  description?: string;
}

export interface EscalationDetails {
  issue: {
    id: string;
    type: string;
  };
  orderId: string;
  customer: string;
  vendor: string;
  deliveryPartner?: string;
  deliveryTime?: string;
  date: string;
  summary: string;
  notes: string[];
  isEscalated: boolean;
}

export interface DashboardStats {
  ordersToday: number;
  revenueToday: number;
  activeVendors: number;
  complaintsToday: number;
}

export interface User {
  id: string;
  phoneNumber: string;
  isAdmin: boolean;
}