import React from "react";
import styled from "styled-components";

interface IButtonProps {
  children: React.ReactNode;
  disabled: boolean;
}

export default function Button({ children, disabled }: IButtonProps) {
  return <ButtonComponent disabled={disabled}>{children}</ButtonComponent>;
}

const ButtonComponent = styled.button``;
