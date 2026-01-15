"use client";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f3f8fe]">
      

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />


      <div className="flex flex-col flex-1 min-w-0 h-full">
      
        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-y-auto p-5 scroll-smooth">
          {children}
        </main>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}