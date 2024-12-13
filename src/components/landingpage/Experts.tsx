import { FaComment } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

export default function Experts() {
  const experts = [
    {
      name: "Alexis Jiang",
      degree: "Masters of Ph.D. in Accounting",
      description:
        "I got my degree from the Nanyang Technological University. Connect for accounting help on MyAssignmentHelp.",
      completedOrders: 3371,
      studentReviews: 1348,
      rating: 5,
    },
    {
      name: "Michael Johnson",
      degree: "M.Sc. in Economics",
      description:
        "If Economics papers give you nightmares, get in touch. I can help you with all topics related to Economics.",
      completedOrders: 2594,
      studentReviews: 1038,
      rating: 4,
    },
    {
      name: "Charles Adkison",
      degree: "L.L.M. in Business Law",
      description:
        "I completed my degree from the Plymouth Marjon University. Your law assignments are in safe hands with me.",
      completedOrders: 3488,
      studentReviews: 1395,
      rating: 5,
    },
    {
      name: "Arthur Amoroso",
      degree: "Ph.D. in Statistics",
      description:
        "I completed my Ph.D. from Azad University in Oxford. Feel free to hire me for all your Statistics problems.",
      completedOrders: 2738,
      studentReviews: 1095,
      rating: 4,
    },
  ];

  return (
    <section className="bg-image py-14 md:py-16 px-5">
      <div className="container mx-auto">
        <h2 className="md:text-5xl text-3xl text-[#08203A] font-bold text-center ">
          The Best Assignment Writers
        </h2>
        <p className="md:text-xl text-lg text-[#08203A] text-center mb-10">Zero Traces of AI - Only Real Writers</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <div className="h-20 w-20 mx-auto text-black bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-lg text-black font-bold">{expert.name}</h3>
              <p className="text-sm text-black">{expert.degree}</p>
              <p className="text-sm text-black mt-4 pb-6">{expert.description}</p>
              <div className="flex justify-between items-center">
                <div className=" text-xs text-left mt-4 text-black">
                  <div className="flex  items-center gap-1">
                    <IoTimeSharp />
                    <span className="text-xs  font-bold">
                      {expert.completedOrders}
                    </span>{" "}
                    Completed Orders
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaComment />
                    <span className="text-xs font-bold">
                      {expert.studentReviews}{" "}
                    </span>
                    Reviews
                  </div>
                </div>
                <button className="mt-6 bg-[#134783] text-sm text-white py-2 px-4 rounded">
                  Hire Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
