"use client";
import AssignmentServices from "@/components/landingpage/AssignmentServices";
import Experts from "@/components/landingpage/Experts";
import FAQ from "@/components/landingpage/FAQ";
import FeatureCard from "@/components/landingpage/FeatureCard";
import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/landingpage/Navbar";
import ServiceCard from "@/components/landingpage/ServiceCard";
import Workflow from "@/components/landingpage/Workflow";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClipboard,
  FaUserGraduate,
  FaDollarSign,
  FaHeadphones,
  FaPenFancy,
  FaBook,
  FaScroll,
  FaTasks,
} from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export default function Home() {
  const [pages, setPages] = useState(1); // Tracks the number of pages
  const wordsPerPage = 250; // Words per page constant

  const services = ["Writing", "Rewriting", "Editing"]; // Services dropdown options
  const subjects = ["Mathematics", "Science", "History", "Programming"]; // Subjects dropdown options

  const features = [
    {
      icon: <HiOutlineCheckBadge />,
      title: "Quality Writing, No AI",
      description:
        "Get quality writing with zero AI, crafted by real experts holding scholarly degrees and extensive academic insights.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Timely Submissions",
      description:
        "If you need assignments on time, we are the best option for you. Beat impossible deadlines with our 24-hour delivery for urgent papers.",
    },
    {
      icon: <FaClipboard />,
      title: "Friendly Policies",
      description:
        "Our student-friendly policies include a money-back guarantee. Rest assured that we’ll take responsibility for all papers.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Reliable Experts",
      description:
        "Every assignment writer on our website has completed their Master’s or Doctorate degree. Rely on them for different types of assistance.",
    },
    {
      icon: <FaDollarSign />,
      title: "Pocket-Friendly Services",
      description:
        "We always ensure to provide affordable services through our dynamic pricing system. Make the most use of our discounts and bonuses.",
    },
    {
      icon: <FaHeadphones />,
      title: "24/7 Availability",
      description:
        "Feel free to get in touch with our academic writers whenever you want. Send in your queries, and they'll get back to you ASAP.",
    },
  ];
  const servicess = [
    {
      icon: <FaPenFancy />,
      title: "Essay Help",
      description:
        "Writing an essay assignment becomes a piece of cake when you can hire our scholars to assist you with the task. These professionals can help you choose an essay topic, compose the outline, and conduct research.",
    },
    {
      icon: <FaBook />,
      title: "Homework Help",
      description:
        "Our assignment help service provider is renowned across the country for assisting students with all kinds of homework. That’s because MyAssignmentHelp hires the best scholars from every academic field imaginable.",
    },
    {
      icon: <FaScroll />,
      title: "Dissertation Help",
      description:
        "Our dissertation writing service can make all your writing troubles disappear. Hiring our assignment help experts means you get excellent dissertation proposals, literature reviews, data collection, and writing guidance.",
    },
    {
      icon: <FaTasks />,
      title: "Coursework Help",
      description:
        "Rely on our custom assignment help experts when your coursework becomes too much to handle. These professionals can assist you with different topics, editing, proofreading, and more so you can improve your grades.",
    },
  ];

  const incrementPages = (e: any) => {
    e.preventDefault();

    setPages((prev) => prev + 1); // Increment pages by 1
  };

  const decrementPages = (e: any) => {
    e.preventDefault();
    setPages((prev) => (prev > 1 ? prev - 1 : 1)); // Decrement pages by 1, but not below 1
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPages(value >= 1 ? value : 1); // Ensure pages are at least 1
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex justify-between text-[#08203A] gap-8 mx-auto px-4  md:px-20   py-12 ">
        <div className="md:px-5 md:mr-10">
          <h2 className="md:text-5xl text-4xl md:leading-[65px] p-1 font-extrabold bg-gradient-to-r from-[#08203A] via-[#134783] to-[#08203A] bg-clip-text text-transparent">
            WrytaPro - Get professional help for your academic tasks
          </h2>
          <p className="md:mt-4 text-gray-600 text-lg">
            Thorough Assignment Support Backed by a 100% No-AI Assurance!
          </p>
          <p className="mt-5 texxt-sm">
            Trusted by <span className="font-bold">100.5k+</span> happy
            customers
          </p>
          <div className="flex gap-10 w-full mt-5">
            <Image
              height={100}
              className="md:w-2/5 w-1/4 md:h-2/5 h-4/5"
              width={100}
              src="/logoh.svg"
              alt=" writer pro ratings "
            />
            <Image
              height={100}
              className="md:w-2/5 w-1/4 md:h-2/5 h-3/5"
              width={100}
              src="/sidejabbar.svg"
              alt=" writer pro review"
            />
            <Image
              height={100}
              className="md:w-2/5 w-1/4 md:h-2/5 h-3/5"
              width={100}
              src="/reviews.svg"
              alt="logo writer pro"
            />
          </div>
          <button
            type="submit"
            className="w-full md:hidden bg-[#134783] text-white py-2 mt-4 rounded-md hover:bg-orange-600"
          >
            Apply Now
          </button>
        </div>
        <div className="w-3/5 hidden md:block  shadow-[#134783] shadow-xl mx-auto z-10 relative mr-10 p-6 border rounded-md">
          <h3 className="text-base text-center font-bold text-[#08203A]">
            AI-Free Assignment Help From 5000+ Real Experts
          </h3>
          <p className="text-sm text-center mb-3">
            Real experts, real help—no AI involved!
          </p>
          <form className="grid grid-cols-2  gap-2">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full h-10 p-2 border border-gray-300 bg-gray-50 rounded-md"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone no.
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+234"
                className="mt-1 w-full h-10 p-2 border border-gray-300 bg-gray-50 rounded-md"
              />
            </div>

            {/* Services Dropdown */}
            <div>
              <label
                htmlFor="services"
                className="block text-sm font-medium text-gray-700"
              >
                Select Service
              </label>
              <select
                id="services"
                className="mt-1 w-full h-10 p-2 border border-gray-300 bg-gray-50 rounded-md"
              >
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Subjects Dropdown */}
            <div>
              <label
                htmlFor="subjects"
                className="block text-sm font-medium text-gray-700"
              >
                Select Subject
              </label>
              <select
                id="subjects"
                className="mt-1 w-full h-10 p-2 border border-gray-300 bg-gray-50 rounded-md "
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Page and Words Input */}
            <div>
              <div className="mb-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deadline
                </label>
                <input
                  id="phone"
                  type="date"
                  className="mt-1 w-full h-10 p-2 border border-gray-300 bg-gray-50 rounded-md"
                />
              </div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Pages
              </label>
              <div className="flex items-center justify-between border border-gray-300 bg-gray-50 rounded-md text-center space-x-2">
                <input
                  id="pages"
                  type="number"
                  value={pages}
                  onChange={handleInputChange}
                  min="1"
                  className="w-14 p-2 "
                />
                <span className="text-gray-700 text-xs font-medium">{` ${
                  pages * wordsPerPage
                } words`}</span>
                <div className="flex text-base">
                  <button onClick={decrementPages} className="p-2 ">
                    -
                  </button>
                  <button onClick={incrementPages} className="p-2 ">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description (Write/Attach)
              </label>
              <div className="border bg-gray-50 p-2 rounded-md border-gray-300">
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Provide details..."
                  className="bg-gray-50 w-full outline-none border-none "
                ></textarea>
                <input type="file" name="" className="hidden" id="file" />
                <label className="flex items-center" htmlFor="file">
                  <GrAttachment />
                  Attach file
                </label>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="col-span-2 my-3">
              <div className="flex items-center">
                <input id="terms" type="checkbox" className="mr-2" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept the T&C, agree to receive offers & updates
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#134783] text-white py-2 mt-4 rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Experts />
      <Workflow />
      <div className="min-h-screen  flex flex-col items-center p-8 bg-gray-50">
        <h1 className="md:text-5xl text-3xl md:w-3/4 text-[#08203A] font-bold text-center mb-6">
          MyAssignmentHelp: Top Assignment Help Features
        </h1>
        <p className="text-center text-[#08203A] mb-12">
          Discover why we’re the top choice for professional writing assistance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-16  gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center flex-col mb-8 bg-gray-50">
        <h1 className="md:text-5xl text-2xl md:w-3/4 text-[#08203A] font-bold text-center  mb-4">
          High-Quality Assignment Assistance For All Assignment Types
        </h1>
        <p className="text-center text-gray-600 md:mb-12">
          Get excellent writing help from reputed assignment writers in the US.
        </p>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicess.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service?.icon} // Pass the icon reference here
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <AssignmentServices />
      </div>
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
