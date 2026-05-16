import React from 'react';

const NotificationsPage = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <p>No new notifications at the moment.</p>
    </div>
  );
};

export default NotificationsPage;
