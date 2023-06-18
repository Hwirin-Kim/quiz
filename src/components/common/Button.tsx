import React from "react";
import styled from "styled-components";

interface IButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: () => void;
}

export default function Button({ children, disabled, onClick }: IButtonProps) {
  return (
    <ButtonComponent disabled={disabled} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button``;
