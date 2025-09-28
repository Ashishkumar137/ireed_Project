"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    linkedinId: "",
    photo: null,
    title: "",
    article: "",
    attachedFile: null,
  });

  const articleImage = [
    "/article1.webp",
    "/article2.webp",
    "/article3.webp",
    "/article4.webp",
    "/article5.webp",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
    setFormData({
      name: "",
      designation: "",
      company: "",
      linkedinId: "",
      photo: null,
      title: "",
      article: "",
      attachedFile: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 py-4 px-4 border-white">
      <div className="max-w-4xl mx-auto bg-gray-300 p-8 rounded border-10">
        <img src="/IREED_Logo.png" width={300} className="mb-5" />
        <p className="text-gray-700 text-base max-w-3xl pl-5">
          Share Insights, submit Impactful Articles, and Inspire the Real Estate
          industry with Thought Leadership, Innovation, and Real-world
          expertise.
        </p>

        <div className="my-6 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articleImage.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="border border-gray-300 h-full flex flex-col items-center justify-center bg-gray-100 text-gray-600">
                  <img
                    src={src}
                    alt={`Article ${index + 1}`}
                    className="object-cover"
                  />
                  <p>Article {index + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        <div className="text-center pb-8 ">
            <button
              className="bg-blue-900 text-white py-3 px-8 rounded hover:bg-blue-800"
            >
              View All
            </button>
          </div>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name (Author)"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <input
            type="text"
            name="linkedinId"
            value={formData.linkedinId}
            onChange={handleChange}
            placeholder="LinkedIn ID"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <input
            type="file"
            name="photo"
            onChange={handleChange}
            accept="image/*"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <textarea
            name="article"
            value={formData.article}
            onChange={handleChange}
            placeholder="Article"
            className="w-full border p-3 h-48 rounded bg-white text-black outline-0"
          />

          <input
            type="file"
            name="attachedFile"
            onChange={handleChange}
            className="w-full border p-3 rounded bg-white text-black outline-0"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white py-3 px-8 rounded hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          © 2025 IREED Academy | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
