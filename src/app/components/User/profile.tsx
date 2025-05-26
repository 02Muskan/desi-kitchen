"use client";
import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const TabButton = ({ label, tab }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full text-left px-4 py-2 rounded-md font-medium ${
        activeTab === tab
          ? "bg-white text-[#FF7F50]"
          : "text-white hover:bg-white hover:text-[#FF7F50]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-[#FF7F50] rounded-xl p-6 text-white shadow-md">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 bg-white text-[#FF7F50] rounded-full flex items-center justify-center text-2xl font-bold">
              C
            </div>
            <h3 className="text-xl font-semibold mt-2">Creed</h3>
            <span className="text-sm bg-white text-[#FF7F50] px-3 py-1 rounded-full mt-1 font-semibold">
              Ramen Enthusiast
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="space-y-2">
            <TabButton label="👤 Profile" tab="profile" />
            <TabButton label="🏠 Saved Addresses" tab="addresses" />
            <TabButton label="⚙️ Preferences" tab="preferences" />
            <TabButton label="🧾 Previous Orders" tab="orders" />
            <TabButton label="🔐 Account Settings" tab="settings" />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 bg-[#F7E7CE] rounded-xl p-6 shadow-md">
          {activeTab === "profile" && (
            <>
              <h3 className="text-black text-lg font-semibold mb-4">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700">Full Name</label>
                  <input
                    value="Creed"
                    disabled
                    className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] border-none rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <input
                    value="anubhav1311@gmail.com"
                    disabled
                    className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] border-none rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Bio</label>
                  <textarea
                    disabled
                    placeholder="No bio provided yet."
                    className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] border-none rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">
                    Favorite Ramen Styles
                  </label>
                  <input
                    value="No favorites selected yet."
                    disabled
                    className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] border-none rounded-md"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-[#FF7F50] hover:bg-[#ff6a35] px-5 py-2 rounded text-white text-sm font-semibold">
                  Edit Profile
                </button>
              </div>
            </>
          )}

          {activeTab === "addresses" && (
            <>
              <h3 className="text-black text-lg font-semibold mb-4">
                Saved Addresses
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Home</p>
                    <p className="text-sm text-gray-700">
                      123 Ramen Street, Flavor Town, NY 10001
                    </p>
                    <p className="text-sm text-gray-500">
                      Phone: (555) 123-4567
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button className="text-[#FF7F50] hover:underline text-sm">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline text-sm">
                      Delete
                    </button>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Work</p>
                    <p className="text-sm text-gray-700">
                      456 Noodle Ave, Spice City, CA 90001
                    </p>
                    <p className="text-sm text-gray-500">
                      Phone: (555) 987-6543
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button className="text-[#FF7F50] hover:underline text-sm">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline text-sm">
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </>
          )}

          {activeTab === "preferences" && (
            <>
              <h3 className="text-black text-lg font-semibold mb-4">
                Preferences
              </h3>
              <form className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF7F50]"
                  />
                  <span className="text-gray-700">
                    Receive promotional emails
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF7F50]"
                  />
                  <span className="text-gray-700">
                    Enable SMS notifications
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF7F50]"
                  />
                  <span className="text-gray-700">Dark Mode</span>
                </label>
                <button
                  type="submit"
                  className="bg-[#FF7F50] hover:bg-[#ff6a35] px-5 py-2 rounded text-white text-sm font-semibold"
                >
                  Save Preferences
                </button>
              </form>
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h3 className="text-black text-lg font-semibold mb-4">
                Previous Orders
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-md shadow">
                  <p className="font-semibold">Order #12345</p>
                  <p className="text-sm text-gray-700">Date: 2025-04-15</p>
                  <p className="text-sm text-gray-700">Status: Delivered</p>
                  <p className="text-sm text-gray-700">
                    Items: Tonkotsu Ramen x2
                  </p>
                </li>
                <li className="bg-white p-4 rounded-md shadow">
                  <p className="font-semibold">Order #12344</p>
                  <p className="text-sm text-gray-700">Date: 2025-03-20</p>
                  <p className="text-sm text-gray-700">Status: Cancelled</p>
                  <p className="text-sm text-gray-700">Items: Shoyu Ramen x1</p>
                </li>
              </ul>
            </>
          )}

          {activeTab === "settings" && (
            <>
              <h3 className="text-black text-lg font-semibold mb-4">
                Account Settings
              </h3>
              <form className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="anubhav1311@gmail.com"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FF7F50]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF7F50] hover:bg-[#ff6a35] px-5 py-2 rounded text-white text-sm font-semibold"
                >
                  Save Settings
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
