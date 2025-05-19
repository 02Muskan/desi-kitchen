import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0e1624] text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-white mb-2">
          User <span className="text-orange-400">Profile</span>
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          View and manage your personal information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#1b2537] rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              C
            </div>
            <h3 className="text-xl font-semibold">Creed</h3>
            <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full mt-1 mb-4">
              Ramen Enthusiast
            </span>

            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>📧</span> anubhav1311@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span> 7909020660
              </div>
              <div className="flex items-center gap-2">
                <span>📅</span> Joined: 1 May 2025
              </div>
            </div>

            <div className="flex mt-6 space-x-3">
              <button className="bg-yellow-600 px-4 py-1 rounded text-black text-sm">
                Profile
              </button>
              <button className="bg-gray-700 px-4 py-1 rounded text-sm">
                Addresses
              </button>
              <button className="bg-gray-700 px-4 py-1 rounded text-sm">
                Preferences
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2 bg-[#1b2537] rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-4">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  value="Creed"
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-[#0e1624] text-white border border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  value="anubhav1311@gmail.com"
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-[#0e1624] text-white border border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Bio</label>
                <textarea
                  disabled
                  placeholder="No bio provided yet."
                  className="w-full mt-1 px-4 py-2 bg-[#0e1624] text-white border border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">
                  Favorite Ramen Styles
                </label>
                <input
                  value="No favorites selected yet."
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-[#0e1624] text-white border border-gray-600 rounded-md"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white text-sm">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
