import React from 'react';
import { Vendor } from '../../types';
import Badge from '../ui/Badge';

interface VendorItemProps {
  vendor: Vendor;
}

const VendorItem: React.FC<VendorItemProps> = ({ vendor }) => {
  return (
    <div className="border-b border-gray-100 py-3 last:border-0">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{vendor.shopName}</h3>
          <p className="text-xs text-gray-500">{vendor.lastActive}</p>
        </div>
        <div>
          {vendor.status === 'active' ? (
            <div className="flex items-center text-green-600 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Active
            </div>
          ) : (
            <div className="flex items-center text-red-600 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Inactive
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorItem;