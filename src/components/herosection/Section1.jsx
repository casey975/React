import React from "react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-20 py-16">
      
      
      <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-purple-300 mb-4">
          Your Roadmap to Product Management
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Build, lead, and innovate with purpose. Explore what it takes to bring your product ideas to life.
        </p>
        <button className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-all duration-200">
          Learn More
        </button>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-end -mr-40">
  <img
    src="https://www.freepnglogos.com/uploads/starbucks-logo-png-vector-12.png"
    alt="Illustration"
    className="rounded-xl w-4/5 md:w-[800px] h-auto"
  />
</div>


    </div>
  );
};

export default Section1;
