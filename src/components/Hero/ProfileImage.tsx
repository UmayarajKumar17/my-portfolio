import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-sm"></div>
      <img
        src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
        alt="Profile"
        className="relative h-64 w-64 rounded-full object-cover border-4 border-white/10"
      />
    </div>
  );
};

export default ProfileImage; 