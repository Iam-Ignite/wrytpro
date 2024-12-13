// components/FAQ.jsx
export default function FAQ() {
    const faqItems = [
      "How fast can you do my assignment for me?",
      "Why should I trust your online assignment guidance service?",
      "Can your academic writers do my assignments of any kind?",
      "How can an online assignment writing service for students help in academics?",
      "Where can I find free PDF resources when seeking assignment writing help?",
      "Does any website offering assignment writing help maintain confidentiality?",
      "Is your assignment help service legal?",
      "Can I choose the assignment writer who will do my assignment for me?",
      "Can I upgrade my assignment help services to premium?",
      "How can I find a reliable service for students who can write my assignment for me?",
      "Can you pay someone to do an assignment?",
      "How do I know if a custom assignment writing service is considered top-rated?",
    ];
  
    return (
      <section className="py-10 px-5 lg:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-700">{item}</span>
              <button className="text-gray-400 hover:text-gray-600">
                ⌄ {/* Replace with an icon library like Heroicons for better visuals */}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  