import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import { PiUserList } from "react-icons/pi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const dropdownItems = [
    {
      title: "Writing",
      links: [
        "Write My Essay for Me",
        "Essay Editing Service",
        "Cheap Essay Writing Services",
        "MBA Essay Writing Service",
        "Essay Help",
        "Research Proposal Writing Service",
        "Research Paper Writing",
        "Write My Paper",
        "Ghost Writer",
        "Academic Writing",
      ],
    },
    {
      title: "Problem Solving",
      links: [
        "Programming Assignment Help",
        "Assessment Help",
        "Do My Assignment",
        "College Homework Help",
        "Urgent Assignment Help",
        "Pay Someone To Do My Homework",
        "Do My Coursework",
        "Do My Homework",
        "Take My Online Class",
      ],
    },
    {
      title: "More Services",
      links: [
        "Take My Online Exam",
        "Dissertation Help",
        "Term Paper Help",
        "Homework Help",
        "Study Help",
        "Coursework Help",
        "Thesis Help",
        "PowerPoint Presentation Services",
      ],
    },
  ];
  const userToggle = () => {
    setIsUserOpen((prev) => !prev);
  };
  
  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Menu Toggle (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#134783] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <DropdownMenu title="Services" items={dropdownItems} />
            <Link href="/experts">
              <span className="text-[#092646] hover:text-[#134783]">
                Experts
              </span>
            </Link>
            <Link href="/reviews">
              <span className="text-[#092646] hover:text-[#134783]">
                Reviews
              </span>
            </Link>
            <Link href="/about">
              <span className="text-[#092646] hover:text-[#134783]">
                About Us
              </span>
            </Link>
          </div>

          {/* Order Now Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/order">
              <span className="bg-[#134783] text-white px-4 py-2 rounded-md hover:bg-[#134783]">
                Order Now
              </span>
            </Link>
            <PiUserList
              size={35}
              color="black"
              onClick={userToggle}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 px-4 flex flex-col gap-4 text-center py-4">
            <Link href="/services">
              <span className="block text-gray-700 hover:text-[#134783]">
                Services
              </span>
            </Link>
            <Link href="/experts">
              <span className="block text-gray-700 hover:text-[#134783]">
                Experts
              </span>
            </Link>
            <Link href="/reviews">
              <span className="block text-gray-700 hover:text-[#134783]">
                Reviews
              </span>
            </Link>
            <Link href="/about">
              <span className="block text-gray-700 hover:text-[#134783]">
                About Us
              </span>
            </Link>
  
            <Link href="/order">
              <span className="block bg-[#134783] text-white px-4 py-2 rounded-md text-center hover:bg-[#134783]">
                Order Now
              </span>
            </Link>
          </div>
        </div>
      )}
      {isUserOpen && (
        <div className=" bg-white absolute right-28 w-1/6 p-4 -bottom-24 flex flex-col gap-4  border z-50 shadow-lg">
        
            <Link href="/about">
              <span className="block text-gray-700 text-center hover:text-[#134783]">
                Sign up
              </span>
            </Link>
            <Link href="/login">
              <span className="block bg-[#134783] text-white px-4 py-2 rounded-md text-center hover:bg-[#134783]">
                Sign In
              </span>
            </Link>
        </div>
      )}
    </nav>
  );
}

// DropdownMenu Component
