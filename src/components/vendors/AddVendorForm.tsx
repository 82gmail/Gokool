import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Store, User, Phone, MapPin, LayoutGrid, Clock, Building } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Select from '../ui/Select';

const AddVendorForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: '',
    shopName: '',
    phoneNumber: '',
    address: '',
    category: '',
    openingTime: '',
    closingTime: '',
    accountNumber: '',
    ifscCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to the server
    navigate('/dashboard');
  };

  const categoryOptions = [
    { value: 'grocery', label: 'Grocery' },
    { value: 'food', label: 'Food & Beverages' },
    { value: 'pharmacy', label: 'Pharmacy' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing & Apparel' },
    { value: 'home', label: 'Home & Decor' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-medium">Add New Vendor</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-1">Add New Vendor</h2>
          <p className="text-gray-600 mb-6">Manually onboard a local shop or delivery partner</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner Name
              </label>
              <Input
                type="text"
                name="ownerName"
                placeholder="Enter full name"
                value={formData.ownerName}
                onChange={handleChange}
                icon={<User size={18} />}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shop Name
              </label>
              <Input
                type="text"
                name="shopName"
                placeholder="Enter store name"
                value={formData.shopName}
                onChange={handleChange}
                icon={<Store size={18} />}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Enter 10-digit mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
                icon={<Phone size={18} />}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Address
              </label>
              <Input
                type="text"
                name="address"
                placeholder="Enter complete store address"
                value={formData.address}
                onChange={handleChange}
                icon={<MapPin size={18} />}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Category
              </label>
              <Select
                name="category"
                options={categoryOptions}
                value={formData.category}
                onChange={handleChange}
                placeholder="Select category"
                icon={<LayoutGrid size={18} />}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                KYC Documents
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="text-center mb-2">PAN Card</div>
                  <div className="flex justify-center">
                    <Upload size={20} className="text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 w-full"
                    size="sm"
                  >
                    Upload
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="text-center mb-2">Aadhar Card</div>
                  <div className="flex justify-center">
                    <Upload size={20} className="text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 w-full"
                    size="sm"
                  >
                    Upload
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="text-center mb-2">GST Certificate</div>
                  <div className="flex justify-center">
                    <Upload size={20} className="text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 w-full"
                    size="sm"
                  >
                    Upload
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="text-center mb-2">FSSAI License</div>
                  <div className="flex justify-center">
                    <Upload size={20} className="text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 w-full"
                    size="sm"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Hours
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="time"
                  name="openingTime"
                  placeholder="Opening Time"
                  value={formData.openingTime}
                  onChange={handleChange}
                  icon={<Clock size={18} />}
                />
                <Input
                  type="time"
                  name="closingTime"
                  placeholder="Closing Time"
                  value={formData.closingTime}
                  onChange={handleChange}
                  icon={<Clock size={18} />}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Details (Optional)
              </label>
              <div className="space-y-4">
                <Input
                  type="text"
                  name="accountNumber"
                  placeholder="Account Number"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  icon={<Building size={18} />}
                />
                <Input
                  type="text"
                  name="ifscCode"
                  placeholder="IFSC Code"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  icon={<Building size={18} />}
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="mt-8"
            >
              Submit & Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVendorForm;