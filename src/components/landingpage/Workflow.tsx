import Image from "next/image";

export default function Workflow() {
  const steps = [
    {
      title: "Fill Order Form",
      description:
        "Provide specific instructions when filling out the order form, such as the deadline, assignment length, etc.",
      icon: "./upload.svg",
    },
    {
      title: "Pay for Services",
      description:
        "Complete the payment process to confirm your order. Our multiple payment options add to your convenience.",
        icon: "./pay.svg",
      },
    {
      title: "Receive the Solution",
      description:
        "Once the assignment writer is done, they waste no time updating you. View the solution from your account.",
        icon: "./get-solution.svg",
      },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="md:text-5xl text-2xl text-[#08203A] font-bold text-center mb-8">
          How Our Online Assignment Help Services Work?
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="p-5 flex justify-center items-center rounded-full h-36 w-36 bg-[#13478333] mb-4">

              <Image
                height={100}
                className="md:w-3/5 w-3/4 md:h-4/5 h-3/5"
                width={100}
                src={step.icon}
                alt="logo writer pro"
                />
                </div>
              <h3 className="text-lg text-[#134783] font-bold">{step.title}</h3>
              <p className="text-sm text-black mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#134783] text-white py-2 px-6 rounded">
            Book Our Service
          </button>
        </div>
      </div>
    </section>
  );
}
