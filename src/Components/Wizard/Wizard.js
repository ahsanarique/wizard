import React, { useState, useEffect } from "react";
import Title from "./Title/Title";
import Steps from "./Steps/Steps";
import Content from "./Content/Content";
import Buttons from "./Buttons/Buttons";

const steps = [1, 2, 3, 4, 5];

const Wizard = () => {
  const [stepList, setStepList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(true);
  const [allContent, setAllContent] = useState([]);

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
  };

  const handlePrevious = () => {
    if (
      currentStep > stepList[0] &&
      currentStep <= stepList[stepList.length - 1]
    ) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStatusChange = (e) => {
    if (e.currentTarget.value === "No") {
      setCurrentStatus(false);
    } else setCurrentStatus(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAllContent([]);
  };

  return (
    <section className="bg-gray-600 text-gray-200 rounded-lg shadow-lg md:w-3/4 w-5/6">
      <Title currentStep={currentStep} />

      <Steps stepList={stepList} currentStep={currentStep} />

      <Content
        currentStep={currentStep}
        stepList={stepList}
        currentStatus={currentStatus}
        setAllContent={setAllContent}
        handleStatusChange={handleStatusChange}
      />

      <Buttons
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleReset={handleReset}
        currentStep={currentStep}
        stepList={stepList}
      />
    </section>
  );
};

export default Wizard;
