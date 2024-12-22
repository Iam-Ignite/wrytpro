"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrAttachment } from "react-icons/gr";

export default function ApplyOnlineClasses() {
  const [activeTab, setActiveTab] = useState("Full-Time");
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseName: "",
    schedule: "Morning",
  });

  const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const tabs = ["Full-Time", "Part-Time", "Self-Paced"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white px-6 py-3 shadow-lg">
      <div className="flex-shrink-0">
            <Link href="/" className="flex items-end">
              <Image
                height={35}
                width={35}
                src="/logo.jpeg"
                alt="logo writer pro"
              />
              <span className="text-xl font-bold text-[#092646]">
                RYTA PRO
                <p className="text-xs font-light -mt-2">
                  Quality and Promptness
                </p>
              </span>
            </Link>
          </div>
      </header>

      {/* Form Section */}
      <div className="container mx-auto mt-10 p-6 ">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-xs rounded-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[#134783] text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* Form */}
        <form className="space-y-6 text-black">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Course Name */}
          <div>
            <label className="block text-gray-700 mb-1">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              placeholder="Eg. Advanced Web Development"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          {/* Schedule Preference */}
          <div>
            <label className="block text-gray-700 mb-1">Preferred Schedule</label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-1">Upload Document (Optional)</label>
            <label className="flex items-center text-[#134783] cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
                <GrAttachment />
                Attach file
            </label>
            {fileName && (
              <p className="text-sm text-[#134783] mt-2">File: {fileName}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#134783] text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition"
          >
            Apply Now
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
        <p>Copyright 2024 © OnlineClasses.com. All rights reserved.</p>
        <p>
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
        </p>
      </footer>

        {/* Chat Now Button */}
        <button className="fixed right-0 bottom-0 md:bottom-auto md:top-1/2 bg-[#134783] text-white px-4 py-2 rounded-l-lg transform -translate-y-1/2">
        Chat Now
      </button>
    </div>
  );
}
