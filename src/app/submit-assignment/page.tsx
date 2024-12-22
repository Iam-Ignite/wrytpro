"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrAttachment } from "react-icons/gr";

export default function AssignmentHelp() {
  const [pageCount, setPageCount] = useState(1);
  const [fileName, setFileName] = useState(""); // File name display state
  const [activeTab, setActiveTab] = useState("Writing"); // Active tab state

  const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const tabs = ["Writing", "Rewriting", "Editing"];

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
      <div className="container mx-auto mt-10 p-6 rounded-lg">
        {/* Title */}
        <h1 className="text-center text-[#092646] text-2xl font-semibold mb-6">
          Get Instant Help From 5000+ Experts For
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[#134783] text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-[#134783] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* Form */}
        <form className="grid grid-cols-1 text-black text-sx md:text-sm md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter email for communication"
              className="w-full border px-4 py-2 rounded"
            />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-r"
              />

            <input
              type="text"
              placeholder="Eg. UNCC100 Self & Community"
              className="w-full border px-4 py-2 rounded"
            />

            <div className="flex items-center gap-4">
              <input
                type="date"
                className="border px-4 py-2 rounded w-full"
                min={new Date().toISOString().split("T")[0]}
              />
              <select className="border px-2 py-2  rounded w-1/3">
                <option>2:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>

           <div className="text-xs flex justify-between">
            <p>No. of pages (1 page = 250 words)
            </p>
            <p className="ml-4 block md:hidden text-gray-600">
                {pageCount * 250} Words
              </p>
           </div>
            <div className="flex  items-center">
              <button
                type="button"
                onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                className="bg-gray-300 px-3 py-1 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                value={pageCount}
                readOnly
                className="md:w-12 py-1 w-full text-center border-t border-b"
              />
              <button
                type="button"
                onClick={() => setPageCount(pageCount + 1)}
                className="bg-gray-300 px-3 py-1 rounded-r"
              >
                +
              </button>
              <p className="ml-4 md:block hidden text-gray-600">
                = {pageCount * 250} Words
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <textarea
              placeholder="Write assignment description"
              className="w-full border px-4 py-2 rounded h-32"
            ></textarea>

            <label className="flex items-center gap-2 text-[#134783] cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
                  <GrAttachment />
                  Attach file
            </label>

            {/* File Name Display */}
            {fileName && (
              <p className="text-sm text-gray-700">
                Selected File:{" "}
                <span className="font-semibold text-[#134783]">{fileName}</span>
              </p>
            )}

            <p className="text-[#134783]">🟢 178 live experts available now!</p>

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              I accept the T&C and other policies of the website and agree to
              receive offers and updates.
            </label>

            <button
              type="submit"
              className="w-full bg-[#134783] text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-600 text-center py-4 mt-10">
        <p>Copyright 2024 ©WrytaPro All rights reserved.</p>
        <p>
          <a href="#" className="underline">
            Refund Policy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
        </p>
        <p className="mt-2">📞 +1-205-350-5700</p>
      </footer>

      {/* Chat Now Button */}
      <button className="fixed right-0 bottom-0 md:bottom-auto md:top-1/2 bg-[#134783] text-white px-4 py-2 rounded-l-lg transform -translate-y-1/2">
        Chat Now
      </button>
    </div>
  );
}
