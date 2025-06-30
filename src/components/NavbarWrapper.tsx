// src/components/NavbarWrapper.tsx
import dynamic from "next/dynamic";

const SlidingNavbar = dynamic(() => import("./SlidingNavbar"), { ssr: false });

export default function NavbarWrapper() {
  return <SlidingNavbar />;
}
