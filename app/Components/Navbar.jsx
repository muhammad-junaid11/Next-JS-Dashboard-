"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCommentDots, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setIsOpen }) {
  const [isUserMenuOpen, setUserMenu] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenu(!isUserMenuOpen);
    setNotificationOpen(false);
  };
  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
    setUserMenu(false);
  };
  return (
    <div className="bg-white h-22.5 shadow-lg flex justify-between items-center gap-3 px-[2%]">
      <div className="search-box border border-[#dfe0e4] relative h-11.25 hidden lg:flex items-center rounded-full w-70 outline-none">
        <input
          type="text"
          placeholder="search"
          className="h-full w-full ps-4 outline-none"
        />
        <FontAwesomeIcon
          className="absolute bg-[#006dca] text-white right-0.5 p-3 rounded-[50%]"
          icon={faSearch}
        />
      </div>
      <div
        className="toggle lg:hidden flex cursor-pointer text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="flex gap-3 items-center">
        <span className="border border-[#006dca] hover:bg-[#006dca] hover:text-white px-4 rounded-full py-2 cursor-pointer transition-colors duration-300 hidden lg:flex">
          Create A New Course
        </span>
        <div
          className="notification cursor-pointer border border-[#c1c4cc] rounded-full min-w-11.25 min-h-11.25 hidden lg:flex justify-center items-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300 "
          onClick={toggleNotification}
        >
          <FontAwesomeIcon icon={faBell} />
          <span className="badge text-xs text-white bg-[#006dca] px-1 rounded-2xl absolute top-0  right-0">
            3
          </span>
          {isNotificationOpen && (
            <ul className="z-50 absolute top-14 right-0 bg-white w-87.5 p-3 flex flex-col gap-2 rounded-2xl shadow-xl animate-fade-in">
              <li className="text-sm text-gray-700">
                <Link
                  href="/"
                  className="w-full flex justify-between items-start"
                >
                  <div className="flex items-start gap-2">
                    <Image
                      src="/User.jpg"
                      alt="user-image"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <span className="text-[#212529] sora-font text-lg">
                        Ronald Richard
                      </span>
                      <p className="text-[#000e03] text-xs">
                        You can stitch between artboards
                      </p>
                    </div>
                  </div>
                  <span className="text-[#000e03] text-xs font-medium">
                    23 Mins ago
                  </span>
                </Link>
              </li>
              <li className="text-sm text-gray-700">
                <Link
                  href="/"
                  className="w-full flex justify-between items-start"
                >
                  <div className="flex items-start gap-2">
                    <Image
                      src="/User.jpg"
                      alt="user-image"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <span className="text-[#212529] sora-font text-lg">
                        Emily Brown
                      </span>
                      <p className="text-[#000e03] text-xs">
                        You can make everything at ease.
                      </p>
                    </div>
                  </div>
                  <span className="text-[#000e03] text-xs font-medium">
                    45 Mins ago
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="comment cursor-pointer border border-[#c1c4cc] rounded-[50%] min-w-11.25 min-h-11.25 hidden lg:flex justify-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300">
          <FontAwesomeIcon icon={faCommentDots}/>
        </div>
        <div
          className="user cursor-pointer rounded-[50%] w-12.5 h-12.5 flex justify-center items-center relative"
          onClick={toggleUserMenu}
        >
          <Image
            src="/User.jpg"
            alt="user-image"
            width={30}
            height={30}
            className="w-full h-full"
          />
          {isUserMenuOpen && (
            <ul className="absolute top-15 right-0 bg-white p-3 flex flex-col gap-3 rounded-2xl shadow-xl w-50 animate-fade-in z-50">
              <li>
                <Link
                  href="/Profile"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faUserCircle} /> My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/Settings"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="ri-settings-5-line text-[18px]"></i> Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="ri-shut-down-line text-[18px]"></i> Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
