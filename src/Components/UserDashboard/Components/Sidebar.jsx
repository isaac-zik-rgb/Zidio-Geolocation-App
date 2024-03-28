import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Sidebar() {
    const [urlTab, setUrlTab] = useState("");

    const location = useLocation();

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const currentUrlTab = urlParams.get("tab")
        setUrlTab(currentUrlTab)
    }, [location])

    console.log("cTab: ", urlTab);
  return (
    <div className="shadow h-full flex flex-col space-y-8">
      <Link
        to={"/dashboard"}
        className={`flex items-center space-x-2 ${urlTab === null ? "text-red-800 border font-semibold" : ""} px-7 py-6`}
      >
        <MdDashboard />
        <p>Dashboard</p>
      </Link>
      <Link
        to={"/dashboard?tab=profile"}
        className={`flex items-center space-x-2 ${urlTab === "profile" ? "text-red-800 border font-semibold" : ""} px-7 py-6`}
      >
        <FaUser />
        <p>My Profile</p>
      </Link>
      <Link
        to={"/dashboard?tab=tracking"}
        className={`flex items-center space-x-2 ${urlTab === "tracking" ? "text-red-800 border font-semibold" : ""} px-7 py-6`}
      >
        <FaMapMarkedAlt />
        <p>Tracking</p>
      </Link>
    </div>
  );
}
