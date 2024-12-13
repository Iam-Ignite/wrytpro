import React from "react";

type LinksType = {
  [section: string]: string[];
};

export default function Footer() {
  const links: LinksType = {
    "Get to know us": [
      "Blog",
      "FAQs",
      "How It Works",
      "Reviews",
      "Contact Us",
      "Resources",
      "Our Offers",
    ],
    Subjects: [
      "Finance Assignment Help",
      "Artificial Intelligence Assignment Help",
      "Autocad Assignment Help",
      "R Assignment Help",
      "Accounting Assignment Help",
      "Nursing Assignment Help",
      "MBA Assignment Help",
      "Computer Science Assignment Help",
      "Engineering Assignment Help",
    ],
    Essay: [
      "Persuasive Essay Writing",
      "Expository Essay Writing",
      "Descriptive Essay Writing",
      "Scholarship Essay Writing",
      "Write Essay For Money",
      "Order An Essay",
      "Pay For Essay",
      "Essay Writers",
    ],
    "Citation Tools": [
      "APA Citation",
      "Chicago Citation",
      "Harvard Citation",
      "MLA Citation",
      "Vancouver Citation",
      "Oxford Citation",
      "Swinburne Citation",
      "AGLC Citation",
      "Deakin Citation",
    ],
  };

  return (
    <footer className="bg-[#134783] text-white py-10 px-5 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-semibold text-white mb-4">{section}</h3>
            <ul className="space-y-2">
              {items.map((link, i) => (
                <li key={i} className="hover:text-white transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between">
        <p>&copy; 2024 MyAssignmentHelp.com. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Revision & Refund Policy</span>
          <span>Fair Use Policy</span>
        </div>
      </div>
    </footer>
  );
}
