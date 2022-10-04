import React, { ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <StyledWrapper>{children}</StyledWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(2, minmax(auto, 400px));
`;
