import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import { useMultistep } from "./useMultistep";
import UserForm from "./UserForm";
import styled from "styled-components";
import { FormEvent, useState } from "react";

interface DataFormProps {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [dataForm, setDataForm] = useState<DataFormProps>(INITIAL_STATE);

  const handleChange = (field: Partial<DataFormProps>) => {
    setDataForm((prevData) => ({ ...prevData, ...field }));
  };
  const {
    currentStep,
    steps,
    nextStep,
    previousStep,
    currentStepNumber,
    isFirstStep,
    isLastStep,
  } = useMultistep({
    steps: [
      <UserForm {...dataForm} handleChange={handleChange} />,
      <AddressForm {...dataForm} handleChange={handleChange} />,
      <AccountForm {...dataForm} handleChange={handleChange} />,
    ],
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  console.log(currentStep);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StepDiv>
        {currentStepNumber}/{steps.length}
      </StepDiv>
      {currentStep}
      <ButtonsContainer>
        {!isFirstStep && (
          <button type="button" onClick={previousStep}>
            Back
          </button>
        )}
        <button>{isLastStep ? "Finish" : "Next"}</button>
      </ButtonsContainer>
    </StyledForm>
  );
}

export default App;

const StyledForm = styled.form`
  position: relative;
  padding: 2rem;
  margin: auto;
  width: 50%;
  border: 1px solid black;
  border-radius: 2rem;
  margin-top: 2rem;
`;

const StepDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: flex-end;
`;
