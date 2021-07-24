import React from "react";

const Steps = ({ stepList, currentStep }) => {
  return (
    <div className="flex justify-around m-4 flex-wrap">
      {stepList.map((step) => (
        <p
          key={step}
          className={`${
            currentStep === step ? "bg-green-400" : "bg-yellow-400 rounded-full"
          } h-10 w-10 flex items-center justify-center text-gray-800 font-semibold`}
        >
          {step}
        </p>
      ))}
    </div>
  );
};

export default Steps;
