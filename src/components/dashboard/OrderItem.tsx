import React from 'react';
import { Order } from '../../types';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface OrderItemProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'processing':
        return 'info';
      case 'completed':
        return 'success';
      default:
        return 'default';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-xs text-gray-500">{order.orderId}</div>
          <div className="font-medium">{order.vendorName}</div>
        </div>
        <Badge variant={getStatusVariant(order.status)}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </Badge>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="text-teal-600 font-medium">{formatCurrency(order.amount)}</div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            View
          </Button>
          <Button variant="primary" size="sm">
            Resolve
          </Button>
          <Button variant="danger" size="sm">
            Escalate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;