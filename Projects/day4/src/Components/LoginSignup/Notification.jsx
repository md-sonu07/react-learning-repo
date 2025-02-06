import { Bell } from "lucide-react";

function Notification({ unreadNotifications }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg flex items-center space-x-3">
        <Bell size={28} className="text-blue-500" />
         {/* Using ! not oprater for showing opusites action */}
        {unreadNotifications > 0 ? (
          <div className="relative">
            <span className="text-lg font-semibold text-gray-800">
              You have {unreadNotifications} unread notifications.
            </span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {unreadNotifications}
            </span>
          </div>
        ) : (
          <span className="text-lg text-gray-500">No New Notifications</span>
        )}
      </div>
    </div>
  );
}

export default Notification;
