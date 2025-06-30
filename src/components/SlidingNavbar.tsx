"use client";

import React from "react";
import Link from "next/link";
import "./SlidingNavbar.css";

const tabs = ["HOME", "ABOUT", "CONTACT", "SERVICES", "ESTIMATES"];

export default function SlidingNavbar() {
  return (
    <nav className="navbar">
      <h1>InsuranceHub</h1>
      <div className="navbar-links">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={`/${tab.toLowerCase() === "home" ? "" : tab.toLowerCase()}`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
