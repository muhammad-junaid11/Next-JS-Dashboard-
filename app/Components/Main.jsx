"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import dashboard from "@/public/dashboard.jpg";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import instructorImage from "@/public/instructorImage.jpg";
import instructorImage2 from "@/public/instructorImage2.jpg";
import instructorImage3 from "@/public/instructorImage3.jpg";
import instructorImage4 from "@/public/instructorImage4.jpg";
import instructorImage5 from "@/public/instructorImage5.jpg";
import instructorImage6 from "@/public/instructorImage6.jpg";
import RecentCourse from "@/public/RecentCourse.jpg";
import RecentCourse2 from "@/public/RecentCourse2.jpg";
import RecentCourse3 from "@/public/RecentCourse3.jpg";
import RecentCourse4 from "@/public/RecentCourse4.jpg";
import RecentCourse5 from "@/public/RecentCourse5.jpg";
import RecentCourse6 from "@/public/RecentCourse6.jpg";
const InstructorsData = [
    {
    id: 1,
    name: "Muhammad Junaid",
    courses: 29,
    students: 7929,
    reviews: "5(90K+ students)",
    img: instructorImage2,
  },
  {
    id: 2,
    name: "Marina Kaur",
    courses: 17,
    students: 112,
    reviews: "4.8(55K+ students)",
    img: instructorImage,
  },
  {
    id: 3,
    name: "Salwa J",
    courses: 13,
    students: 78,
    reviews: "4(67K+ students)",
    img: instructorImage3,
  },
  {
    id: 4,
    name: "Barund",
    courses: 67,
    students: 134,
    reviews: "4(53K+ students)",
    img: instructorImage4,
  },
  {
    id: 5,
    name: "Jam Kim",
    courses: 37,
    students: 136,
    reviews: "4.3(30K+ students)",
    img: instructorImage5,
  },
  {
    id: 6,
    name: "Javelin",
    courses: 67,
    students: 137,
    reviews: "4.1(30K+ students)",
    img: instructorImage6,
  },
];
const courseData = [
  {
    id: 1,
    name: "Vaccine Development",
    Enroll: 40,
  },
  {
    id: 2,
    name: "Vaccine Development",
    Enroll: 40,
  },
  {
    id: 1,
    name: "Clinical Trials",
    Enroll: 35,
  },
  {
    id: 1,
    name: "Couch Syrup ",
    Enroll: 20,
  },
  {
    id: 1,
    name: "Allergy Dose",
    Enroll: 59,
  },
  {
    id: 1,
    name: "Flu Viral",
    Enroll: 67,
  },
];

const RecentcourseData = [
  {
    id: 1,
    name: "Vuejs Course",
    time: "5 hr 45 min",
    lesson: 10,
    students: 197,
    img: RecentCourse,
  },
  {
    id: 2,
    name: " Reactjs Course",
    time: "9 hr 45 min",
    lesson: 39,
    students: 657,
    img: RecentCourse2,
  },
  {
    id: 3,
    name: "js Course",
    time: "9 hr ",
    lesson: 30,
    students: 134,
    img: RecentCourse3,
  },
  {
    id: 4,
    name: "Angular Course",
    time: " 45 min",
    lesson: 10,
    students: 19,
    img: RecentCourse4,
  },
  {
    id: 5,
    name: "Tailwind Course",
    time: "5 hr 45 min",
    lesson: 18,
    students: 167,
    img: RecentCourse5,
  },
  {
    id: 6,
    name: "MUI Course",
    time: "5 hr ",
    lesson: 18,
    students: 184,
    img: RecentCourse6,
  },
];
import dynamic from "next/dynamic";
const StatCard = ({ title, value, color }) => (
  <div className="p-6 rounded-xl bg-white w-full flex justify-between items-start shadow-sm border border-gray-100">
    <div className="flex flex-col gap-1">
      <div className="text-[#4f586d] text-sm font-medium">{title}</div>
      <h6 className="text-[#1e293b] text-2xl font-bold">{value}</h6>
      <Link
        href="/"
        className="text-[#066dca] underline text-xs font-semibold pt-3 hover:text-blue-800"
      >
        View All
      </Link>
    </div>
    <div
      className={`w-10 h-10 flex justify-center items-center rounded-full ${color}`}
    >
      <Image
        src={dashboard}
        alt="icon"
        className="w-5 h-5 object-contain invert brightness-0"
      />
    </div>
  </div>
);

function Main() {
  const MyChart = dynamic(() => import("./MyChart"), { ssr: false });

  return (
    <div className="bg-[#f8fafc] p-4 md:p-1 min-h-screen">
      <h2 className="font-bold text-3xl pb-6 text-gray-800">Dashboard !</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Courses" value="2000+" color="bg-[#066dca]" />
        <StatCard title="Enrolled Courses" value="900+" color="bg-[#10b981]" />
        <StatCard title="Active Courses" value="100+" color="bg-[#f59e0b]" />
        <StatCard
          title="Completed Courses"
          value="1000+"
          color="bg-[#f59e0b]"
        />
        <StatCard title="Total Students" value="88,000+" color="bg-[#066dca]" />
        <StatCard
          title="Total Earnings"
          value="$956,542.00"
          color="bg-[#10b981]"
        />
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Popular Instructor Table */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">
              Popular Instructor
            </h3>
            <Link
              href="/"
              className="text-[#066dca] text-xs font-medium underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-xs uppercase font-medium border-b border-gray-50">
                  <th className="pb-4">Instructor</th>
                  <th className="pb-4">Courses</th>
                  <th className="pb-4">Students</th>
                  <th className="pb-4">Reviews</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {InstructorsData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 flex items-center gap-3">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                    </td>
                    <td className="py-4 text-gray-500">{item.courses}</td>
                    <td className="py-4 text-gray-500">{item.students}</td>
                    <td className="py-4 text-gray-500 whitespace-nowrap">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400 mr-1"
                      />
                      {item.reviews}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">Recent Course</h3>
            <Link
              href="/"
              className="text-[#066dca] text-xs font-medium underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-xs uppercase font-medium border-b border-gray-50">
                  <th className="pb-4">Course Title | Hours</th>
                  <th className="pb-4 text-center">Total Lesson</th>
                  <th className="pb-4 text-center">Students</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {RecentcourseData.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 flex items-center gap-3">
                      <Image
                        src={course.img}
                        alt={course.name}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-700">
                          {course.name}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {course.time}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center text-gray-500">
                      {course.lesson}
                    </td>
                    <td className="py-4 text-center text-gray-500">
                      {course.students}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
