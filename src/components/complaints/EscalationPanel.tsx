import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Store, Phone, Calendar, Clock, Truck } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

import { EscalationDetails } from '../../types';

interface EscalationPanelProps {
  escalation: EscalationDetails;
}

const EscalationPanel: React.FC<EscalationPanelProps> = ({ escalation }) => {
  const navigate = useNavigate();
  const [note, setNote] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-medium">Escalation Panel</h1>
          </div>
          <Badge variant="danger" className="bg-red-100">Escalated</Badge>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <Card>
          <h2 className="text-lg font-medium mb-2">
            Issue #{escalation.issue.id}
          </h2>
          <h3 className="text-xl font-bold mb-2">{escalation.issue.type}</h3>
        </Card>

        <Card>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Store size={16} className="mr-2" /> Order ID
              </div>
              <div className="font-medium">#{escalation.orderId}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Store size={16} className="mr-2" /> Vendor
              </div>
              <div className="font-medium">{escalation.vendor}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <User size={16} className="mr-2" /> Customer
              </div>
              <div className="font-medium">{escalation.customer}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Truck size={16} className="mr-2" /> Delivery Partner
              </div>
              <div className="font-medium">{escalation.deliveryPartner}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-2" /> Delivery Time
              </div>
              <div className="font-medium">{escalation.deliveryTime}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar size={16} className="mr-2" /> Date
              </div>
              <div className="font-medium">{escalation.date}</div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Issue Summary</h3>
          <p className="text-gray-700">{escalation.summary}</p>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="primary" className="flex items-center justify-center">
            <Phone size={18} className="mr-2" /> Contact Vendor
          </Button>
          <Button variant="primary" className="flex items-center justify-center">
            <Truck size={18} className="mr-2" /> Contact Delivery Partner
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <User size={18} className="mr-2" /> Call Customer
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Calendar size={18} className="mr-2" /> View Order Timeline
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="primary" className="bg-teal-600 hover:bg-teal-700">
            Mark Resolved
          </Button>
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
            Flag for Review
          </Button>
        </div>

        <Card>
          <h3 className="font-medium mb-3">Internal Admin Notes</h3>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            rows={3}
            placeholder="Add notes here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Previous Notes</h4>
            <p className="text-sm text-gray-500 italic">No previous notes found.</p>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Attach Screenshots</h3>
            <Badge variant="info" className="text-xs bg-gray-100 text-gray-600">Auto-flag in 18:23:45</Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm" className="text-xs py-1">
              Service Delay
            </Button>
            <Button variant="outline" size="sm" className="text-xs py-1">
              Payment Dispute
            </Button>
            <Button variant="outline" size="sm" className="text-xs py-1">
              Vendor Issue
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EscalationPanel;