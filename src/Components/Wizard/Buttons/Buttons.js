import React from "react";

const Buttons = ({
  handleNext,
  handlePrevious,
  handleReset,
  currentStep,
  stepList,
}) => {
  return (
    <div className="flex justify-between mx-2 mb-5 w-5/6 mt-16">
      <button
        onClick={() => handleReset()}
        className="px-4 py-2 rounded-full bg-purple-600 mr-2 font-semibold"
      >
        Reset
      </button>
      <div className="flex text-gray-800">
        <button
          onClick={() => handlePrevious()}
          className={`px-4 py-2 rounded-full bg-yellow-400 mr-2 font-semibold ${
            currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={() => handleNext()}
          className={`px-4 py-2 rounded-full bg-green-400 font-semibold `}
        >
          {currentStep === stepList[stepList.length - 1] ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
