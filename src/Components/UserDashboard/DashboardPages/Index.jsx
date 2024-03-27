import React, { useEffect, useState } from "react";
import Tracking from "../Components/Tracking";
import Profile from "../Components/Profile";
import Dashboard from "../Components/Dashboard";
import { useLocation } from "react-router-dom";

export default function DashboardPages() {
  const [urlTab, setUrlTab] = useState("");

  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const currentUrlTab = urlParams.get("tab");
    setUrlTab(currentUrlTab);
  }, [location]);
  return (
    <div className="pl-4 h-full">
      <div>
        {(urlTab === null && <Dashboard />) ||
          (urlTab === "profile" && <Profile />) ||
          (urlTab === "tracking" && <Tracking />)}
      </div>
    </div>
  );
}
