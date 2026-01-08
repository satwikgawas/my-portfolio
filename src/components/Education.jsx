import React from "react";

const Education = () => {
  return (
    <>
      <section className="px-16 py-10 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-6">My Education</h2>
        <div className="space-y-4">
          <div className="bg-[#111827] p-5 rounded">
            <h3 className="font-semibold">
              Master Of Computer Application(MCA)
            </h3>
            <p className="text-gray-400">
              2019-2022 | Shivaji University Kolhapur
            </p>
          </div>
          <div className="bg-[#111827] p-5 rounded">
            <h3 className="font-semibold">Bachelor Of Science(B.Sc)</h3>
            <p className="text-gray-400">
              2016-2019 | Swami Vivekanand College Kolhapur
            </p>
          </div>
          <div className="bg-[#111827] p-5 rounded">
            <h3 className="font-semibold">HSC</h3>
            <p className="text-gray-400">
              2014-2016 | Gopal Krishna Gokhale College Kolhapur
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
