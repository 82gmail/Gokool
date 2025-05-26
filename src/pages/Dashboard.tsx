import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Wallet, Store, AlertCircle, User, Phone, List, RotateCcw, Calendar } from 'lucide-react';
import Card from '../components/ui/Card';
import StatCard from '../components/dashboard/StatCard';
import OrderItem from '../components/dashboard/OrderItem';
import VendorItem from '../components/dashboard/VendorItem';

import { mockDashboardStats, mockOrders, mockVendors } from '../data/mockData';

const Dashboard: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Today, {today}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={<ShoppingCart size={20} />} 
            value={mockDashboardStats.ordersToday} 
            label="Orders Today" 
            iconColor="bg-blue-100 text-blue-600"
          />
          <StatCard 
            icon={<Wallet size={20} />} 
            value={mockDashboardStats.revenueToday} 
            label="Revenue Today" 
            iconColor="bg-green-100 text-green-600"
            prefix="₹"
          />
          <StatCard 
            icon={<Store size={20} />} 
            value={mockDashboardStats.activeVendors} 
            label="Active Vendors" 
            iconColor="bg-purple-100 text-purple-600"
          />
          <StatCard 
            icon={<AlertCircle size={20} />} 
            value={mockDashboardStats.complaintsToday} 
            label="Complaints Today" 
            iconColor="bg-red-100 text-red-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-medium mb-4">Order Management</h2>
              <div>
                {mockOrders.map((order) => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-medium mb-4">Active Vendors</h2>
              <div>
                {mockVendors.map((vendor) => (
                  <VendorItem key={vendor.id} vendor={vendor} />
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/add-vendor">
                  <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center">
                    <User size={24} className="text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Add New Vendor</span>
                  </div>
                </Link>
                <Link to="/contact-delivery">
                  <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center">
                    <Phone size={24} className="text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Contact Delivery</span>
                  </div>
                </Link>
                <Link to="/assign-order">
                  <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center">
                    <List size={24} className="text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Assign Order</span>
                  </div>
                </Link>
                <Link to="/mark-refund">
                  <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center">
                    <RotateCcw size={24} className="text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Mark Refund</span>
                  </div>
                </Link>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Recent Activity</h2>
                <Link to="/activity" className="text-teal-600 text-sm hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-100 p-2 mr-3">
                    <User size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm">New vendor <span className="font-medium">Fresh Foods</span> was registered</p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <ShoppingCart size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm">Order <span className="font-medium">#ORD0045</span> was completed</p>
                    <p className="text-xs text-gray-500">25 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-red-100 p-2 mr-3">
                    <AlertCircle size={16} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm">Complaint <span className="font-medium">#CMP1245</span> was escalated</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-2 mr-3">
                    <Calendar size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm">Weekly report is now available</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;