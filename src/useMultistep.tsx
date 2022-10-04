import React, { useState } from "react";

export const useMultistep = ({ steps }: { steps: React.ReactNode[] }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log(currentStep, " ", steps.length);
    if (currentStep >= steps.length - 1) return currentStep;
    setCurrentStep((prevVal) => prevVal + 1);
  };

  const previousStep = () => {
    if (currentStep <= 0) return 1;
    setCurrentStep((prevVal) => prevVal - 1);
  };

  return {
    currentStepNumber: currentStep + 1,
    currentStep: steps[currentStep],
    steps,
    nextStep,
    previousStep,
    isLastStep: currentStep === steps.length - 1,
    isFirstStep: currentStep === 0,
  };
};
