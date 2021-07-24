import React from "react";

const Title = ({ currentStep }) => {
  return (
    <div className="bg-purple-600 py-3 rounded-lg w-full text-center">
      <p className="md:text-3xl text-xl">Step: {currentStep}</p>
    </div>
  );
};

export default Title;
