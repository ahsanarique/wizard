import React, { useState, useEffect } from "react";
import Title from "./Title/Title";
import Steps from "./Steps/Steps";
import Content from "./Content/Content";

const steps = [1, 2, 3, 4, 5, 6];

const Wizard = () => {
  const [stepList, setStepList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [allContent, setAllContent] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setStepList(steps);
  }, []);

  const handleNext = () => {
    if (
      currentStep >= stepList[0] &&
      currentStep < stepList[stepList.length - 1]
    ) {
      setCurrentStep((prev) => prev + 1);
    }

    if (currentStep === stepList[stepList.length - 1]) {
      setSuccess(
        <p className="text-green-400 text-lg font-bold">
          Form submission successful!
        </p>
      );
    }
  };

  const handlePrevious = () => {
    if (
      currentStep > stepList[0] &&
      currentStep <= stepList[stepList.length - 1]
    ) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAllContent([]);
    window.location.reload();
  };

  return (
    <section className="bg-gray-600 text-gray-200 rounded-lg shadow-lg md:w-3/4 w-5/6">
      <Title currentStep={currentStep} />

      <Steps stepList={stepList} currentStep={currentStep} />

      <Content
        currentStep={currentStep}
        stepList={stepList}
        setAllContent={setAllContent}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleReset={handleReset}
        allContent={allContent}
        success={success}
      />
    </section>
  );
};

export default Wizard;
