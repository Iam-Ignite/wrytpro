// components/AssignmentServices.jsx
export default function AssignmentServices() {
    return (
      <section className="bg-white py-10 px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Best Quality Assignment Writing Services at Affordable Prices
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Enjoy professional assistance without burning a hole in your pocket.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-lg text-gray-800">
              <ul className="space-y-2">
                <li>🔸 Law</li>
                <li>🔸 Chemistry</li>
                <li>🔸 Accounting</li>
              </ul>
              <ul className="space-y-2">
                <li>🔸 Mathematics</li>
                <li>🔸 English</li>
                <li>🔸 Physics</li>
              </ul>
              <ul className="space-y-2">
                <li>🔸 Philosophy</li>
                <li>🔸 Medicine</li>
                <li>🔸 Psychology</li>
              </ul>
            </div>
          </div>
  
          {/* Right Features */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">FREE Features</h2>
            <ul className="space-y-4">
              {[
                { feature: "Referencing", price: "20.99" },
                { feature: "Revision", price: "19.99" },
                { feature: "Plagiarism Checks", price: "14.99" },
                { feature: "Formatting", price: "12.99" },
                { feature: "Proofreading & Editing", price: "10.99" },
                { feature: "Unlimited Edits", price: "6.99" },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">✅ {item.feature}</span>
                  <div className="flex items-center space-x-2">
                    <span className="line-through text-gray-400">${item.price}</span>
                    <span className="text-[#134783] font-bold">FREE</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 bg-[#134783] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition">
              Unlock More
            </button>
          </div>
        </div>
      </section>
    );
  }
  