"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const reviewData = [
  { id: 1, name: "Sarah Williams", rating: 5, text: "I'm a big fan of these courses. The content is top-notch and easy to follow!", date: "15 August 2025" },
  { id: 2, name: "Michael Brown", rating: 4, text: "Great structure and very practical examples.", date: "12 August 2025" },
  { id: 3, name: "Emily Davis", rating: 5, text: "Amazing instructor and very clear explanations.", date: "10 August 2025" },
  { id: 4, name: "John Smith", rating: 3, text: "The content is okay but could use more real-world examples.", date: "8 August 2025" },
  { id: 5, name: "Olivia Johnson", rating: 4, text: "Very engaging and interactive lessons.", date: "7 August 2025" },
  { id: 6, name: "William Lee", rating: 5, text: "Learned a lot in a short time. Highly recommend!", date: "5 August 2025" },
  { id: 7, name: "Sophia Martinez", rating: 4, text: "Good pacing and well-structured courses.", date: "3 August 2025" },
  { id: 8, name: "James Wilson", rating: 3, text: "Some topics were confusing but overall helpful.", date: "1 August 2025" },
  { id: 9, name: "Isabella Garcia", rating: 5, text: "Fantastic content and very clear explanations.", date: "30 July 2025" },
  { id: 10, name: "Benjamin Taylor", rating: 4, text: "Practical examples helped me a lot.", date: "28 July 2025" },
  { id: 11, name: "Mia Anderson", rating: 5, text: "Exceeded my expectations! Very detailed and useful.", date: "25 July 2025" },
  { id: 12, name: "Lucas Thomas", rating: 4, text: "Good overview of the topic and easy to follow.", date: "22 July 2025" },
];

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
        {review.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
        <div className="flex text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className={i < review.rating ? "text-yellow-400" : "text-gray-200"} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
      {review.text}
    </p>
    <div className="mt-4 text-[10px] text-gray-400">{review.date}</div>
  </div>
);

export default function Reviews() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl pb-6 text-gray-800">Reviews</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviewData.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
}
