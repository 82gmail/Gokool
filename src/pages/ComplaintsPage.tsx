import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../components/ui/Button';
import ComplaintItem from '../components/complaints/ComplaintItem';
import { mockComplaints } from '../data/mockData';

const ComplaintsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComplaints = mockComplaints.filter((complaint) => {
    if (activeFilter !== 'all' && complaint.status !== activeFilter) {
      return false;
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        complaint.complaintId.toLowerCase().includes(query) ||
        complaint.customerName.toLowerCase().includes(query) ||
        complaint.orderId.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Complaints Inbox</h1>
          <p className="text-gray-600">Resolve reported issues in real-time</p>
        </header>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Search by Order ID or Customer Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
          <Button
            variant={activeFilter === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('all')}
          >
            All Status
          </Button>
          <Button
            variant={activeFilter === 'pending' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('pending')}
          >
            Pending
          </Button>
          <Button
            variant={activeFilter === 'in-review' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('in-review')}
          >
            In Review
          </Button>
          <Button
            variant={activeFilter === 'resolved' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('resolved')}
          >
            Resolved
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((complaint) => (
              <ComplaintItem key={complaint.id} complaint={complaint} />
            ))
          ) : (
            <div className="py-8 text-center">
              <p className="text-gray-500">No complaints found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;