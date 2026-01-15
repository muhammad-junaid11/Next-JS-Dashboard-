"use client";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // h-screen locks the total height to the viewport. 
    // overflow-hidden prevents the body from scrolling.
    <div className="flex h-screen overflow-hidden bg-[#f3f8fe]">
      
      {/* SIDEBAR: Remains fixed on the left */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* RIGHT SIDE: Navbar + Scrollable Content */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        
        {/* Navbar stays at the top of the right section */}
        <Navbar setIsOpen={setIsOpen} />

        {/* MAIN CONTENT AREA: Only this part scrolls */}
        <main className="flex-1 overflow-y-auto p-5 scroll-smooth">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}