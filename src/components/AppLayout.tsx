"use client";
import React, { ReactNode } from "react";
import SlidingNavbar from "./SlidingNavbar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SlidingNavbar />
      <main>{children}</main>
    </>
  );
}
