import React from 'react';
import { Complaint } from '../../types';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface ComplaintItemProps {
  complaint: Complaint;
}

const ComplaintItem: React.FC<ComplaintItemProps> = ({ complaint }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-500 text-white';
      case 'in-review':
        return 'bg-blue-500 text-white';
      case 'resolved':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getIssueColor = (issue: string) => {
    switch (issue) {
      case 'Late Delivery':
        return 'bg-yellow-100 text-yellow-800';
      case 'Missing Item':
        return 'bg-red-100 text-red-800';
      case 'Rude Behaviour':
        return 'bg-yellow-100 text-yellow-800';
      case 'Payment Dispute':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm text-gray-500">#{complaint.complaintId}</div>
        <Badge className={getStatusColor(complaint.status)}>
          {complaint.status === 'in-review' ? 'In Review' : complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
        </Badge>
      </div>
      
      <div className="mb-2">
        <div className="flex items-center">
          <span className="font-medium">{complaint.customerName}</span>
          <span className="ml-2 text-sm text-gray-500">Customer</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Order #{complaint.orderId} • {complaint.date} | {complaint.time}
        </div>
      </div>
      
      <div className="mb-3">
        <Badge className={getIssueColor(complaint.issue)}>
          {complaint.issue}
        </Badge>
      </div>
      
      <div className="flex space-x-2">
        <Button variant="primary" size="sm">
          View Details
        </Button>
        <Button variant="outline" size="sm">
          Mark as Resolved
        </Button>
        <Button variant="danger" size="sm">
          Escalate
        </Button>
      </div>
    </div>
  );
};

export default ComplaintItem;