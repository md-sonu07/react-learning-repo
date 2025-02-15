import React from "react";
import { Settings as SettingsIcon } from "lucide-react";

function SettingsPage() {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold flex items-center justify-center gap-3">
        <SettingsIcon size={48} className="text-yellow-400" /> Settings
      </h3>
      <p className="mt-4 text-xl">
        Configure your dashboard settings here.
      </p>
    </div>
  );
}

export default SettingsPage;