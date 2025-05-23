import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-black mb-2">
          User <span className="text-[#FF7F50]">Profile</span>
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          View and manage your personal information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F7E7CE] rounded-xl p-6 flex flex-col items-center text-center text-white shadow-md">
            <div className="w-24 h-24 bg-white text-[#FF7F50] rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              C
            </div>
            <h3 className="text-xl font-semibold text-[#FF7F50]">Creed</h3>
            <span className="bg-white text-[#FF7F50] text-xs px-3 py-1 rounded-full mt-1 mb-4 font-semibold">
              Ramen Enthusiast
            </span>

            <div className="space-y-2 text-sm text-black">
              <div className="flex items-center gap-2 ">
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
              <button className="bg-white text-[#FF7F50] px-4 py-1 rounded text-sm font-semibold">
                Profile
              </button>
              <button className="bg-white text-[#FF7F50] px-4 py-1 rounded text-sm font-semibold">
                Addresses
              </button>
              <button className="bg-white text-[#FF7F50] px-4 py-1 rounded text-sm font-semibold">
                Preferences
              </button>
            </div>
          </div>
          <div className="md:col-span-2 bg-[#F7E7CE] rounded-xl p-6 shadow-md">
            <h3 className="text-black text-lg font-semibold mb-4">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  value="Creed"
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] placeholder-white border-none rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  value="anubhav1311@gmail.com"
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] placeholder-white border-none rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Bio</label>
                <textarea
                  disabled
                  placeholder="No bio provided yet."
                  className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] placeholder-white border-none rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">
                  Favorite Ramen Styles
                </label>
                <input
                  value="No favorites selected yet."
                  disabled
                  className="w-full mt-1 px-4 py-2 bg-white text-[#FF7F50] placeholder-white border-none rounded-md"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-[#FF7F50] hover:bg-[#ff6a35] px-5 py-2 rounded text-white text-sm font-semibold">
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
