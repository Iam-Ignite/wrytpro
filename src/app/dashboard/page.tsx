import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* Header */}
      <header className="bg-orange-500 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-3">
          <h1 className="text-xl font-bold uppercase">My Assignment Help™</h1>
          <span className="text-sm">World's No.1 Essay & Assignment Help Co.</span>
        </div>
        <button className="bg-green-600 px-4 py-2 rounded-md text-sm md:text-base">
          New Assignment
        </button>
      </header>

      {/* Page Content */}
      <main className="px-4 md:px-6 py-8 flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          {/* Recent Orders */}
          <div className="bg-white rounded-md shadow-md p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-blue-700 uppercase">
              Recent Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-2">Order ID & Status</th>
                    <th className="py-2">Subject</th>
                    <th className="py-2">Deadline</th>
                    <th className="py-2">Payment Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 text-blue-600">
                      <span className="font-semibold">2351118</span> <br />
                      <span className="text-xs text-red-500">Invalid</span>
                    </td>
                    <td>English Language and...</td>
                    <td>18 Dec 2024, 11:59 PM</td>
                    <td>
                      <button className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                        Pay USD 7.00 To Start
                      </button>
                    </td>
                    <td>
                      <a href="#" className="text-blue-500 underline">
                        View
                      </a>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 text-blue-600">
                      <span className="font-semibold">2351117</span> <br />
                      <span className="text-xs text-red-500">Invalid</span>
                    </td>
                    <td>English Assignments</td>
                    <td>18 Dec 2024, 11:59 PM</td>
                    <td>
                      <button className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                        Pay USD 8.00 To Start
                      </button>
                    </td>
                    <td>
                      <a href="#" className="text-blue-500 underline">
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Prebook Order */}
          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 uppercase">
              Save Money with Prebook Order
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Get flat <span className="font-bold">15% off</span> on your next
              assignment.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Pre-book order
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/4 mt-6 lg:mt-0 lg:ml-6 space-y-6">
          {/* Refer & Earn */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="font-semibold mb-2 text-gray-800">Refer & Earn</h3>
            <p className="text-sm text-gray-500">
              Get <span className="font-bold">FLAT 20% CASH</span> for every
              friend's order for life!
            </p>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded-md">
              Earn Now
            </button>
          </div>

          {/* Quick Tip */}
          <div className="bg-yellow-100 p-4 rounded-md">
            <h3 className="font-semibold mb-2 text-yellow-800">Success Tip</h3>
            <p className="text-sm">5% Cashback on APP - grab it now!</p>
            <button className="text-blue-500 underline mt-2">Know More</button>
          </div>

          {/* SAY NO TO AI */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-sm font-bold text-red-600 uppercase">
              SAY NO TO AI
            </h3>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-sm text-gray-500">
        © 2024 Myassignmenthelp.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
