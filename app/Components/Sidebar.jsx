"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { faHome, faStar, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: faHome },
  { href: "/dashboard/courses", label: "Courses", icon: faClipboard },
  { href: "/dashboard/reviews", label: "Reviews", icon: faStar },
];

  return (
    <aside className={`
      h-full w-[320px] bg-white shadow-xl fixed z-50 p-5
      transition-transform duration-300 lg:translate-x-0 lg:static 
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      flex flex-col border-r border-gray-100
    `}>
      <div className='nav-logo text-center py-2'>
        <Link href='/' className='cursor-pointer'>
          <h1 className='text-3xl font-semibold'>
            Learn <span className='text-[#066dca]'>Hub</span>
          </h1>
        </Link>
      </div>

      <span className='h-[1.5px] bg-[#dfe0e4] w-full block my-2'></span>
      <ul className='flex flex-col gap-2 flex-1 overflow-y-auto scrollbar-hide'>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} onClick={() => setIsOpen(false)}>
              <Link 
                href={item.href}
                className={`py-4 px-4 rounded-xl flex items-center transition-all duration-300 ${
                  isActive ? "bg-[#e6f0fa] text-[#066dca]" : "text-neutral-500 hover:bg-gray-50"
                }`}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className={`pe-3 text-lg ${isActive ? "text-[#066dca]" : "text-gray-400"}`}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;