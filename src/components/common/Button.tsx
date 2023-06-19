import React from "react";
import styled from "styled-components";

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ children, disabled, onClick }: IButtonProps) {
  return (
    <ButtonComponent disabled={disabled} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  background-color: #7676f4;
  border: none;
  font-size: 1.3rem;
  color: white;
  padding: 0.3rem;
  border-radius: 0.5rem;
  margin: 0.3rem;

  &:disabled {
    background-color: #d3d2d2;
    color: #727070;
  }
`;
