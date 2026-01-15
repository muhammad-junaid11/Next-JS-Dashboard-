"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import sql from "@/public/sql.jpg";
import seo from "@/public/seo.jpg";
import graphic from "@/public/graphic.jpg";
import aws from "@/public/aws.jpg";
import python from "@/public/python.jpg";
import nextjs from "@/public/nextjs.jpg";
const courses = [
  {
    id: 1,
    category: "DEVELOPMENTS",
    title: "SQLBG 2026 for NEWBS: Weekender Crash Course",
    students: "435,671",
    rating: 4.5,
    price: "$13.00",
    img: sql,
  },
  {
    id: 2,
    category: "DEVELOPMENTS",
    title: "SEO 2026: Complete SEO Training + SEO for WordPress",
    students: "435,671",
    rating: 4.5,
    price: "$13.00",
    img: seo,
  },
  {
    id: 3,
    category: "DESIGN",
    title: "Graphic Design Masterclass - Learn about great Design",
    students: "435,671",
    rating: 3.5,
    price: "$56.00",
    img: graphic,
  },
  {
    id: 4,
    category: "DEVELOPMENTS",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2026",
    students: "435,671",
    rating: 4.5,
    price: "$13.00",
    img: aws,
  },
  {
    id: 5,
    category: "DEVELOPMENTS",
    title: "2026 Complete Python Bootcamp From Zero to Hero",
    students: "435,671",
    rating: 4.5,
    price: "$13.00",
    img: python,
  },
  {
    id: 6,
    category: "DEVELOPMENTS",
    title: "2026 Complete Next Js course from beginning to Pro Level",
    students: "673,840",
    rating: 5,
    price: "$70.00",
    img: nextjs,
  },
];

export default function CoursesPage() {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl pb-6 text-gray-800">Courses</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={course.img}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-1">
                <span className="bg-blue-50 text-[#066dca] text-[10px] font-bold px-2 py-1 rounded">
                  {course.category}
                </span>
                <div className="flex items-center gap-1 text-orange-400 text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="text-gray-700 font-bold">
                    {course.rating}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 text-sm mb-6 leading-snug min-h-10">
                {course.title}
              </h3>

              <div className="flex justify-between items-center border-t border-gray-50 pt-2">
                <div className="flex items-center gap-2 text-gray-700 text-xs">
                  <FontAwesomeIcon icon={faUser} />
                  <span>{course.students} students</span>
                </div>
                <span className="text-[#066dca] font-bold text-lg">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
