import React from "react";
import { styled } from "styled-components";

interface IPageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IPageLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 600px;
  height: 500px;
  border-radius: 2rem;
  padding: 1rem;
  background-color: #ebe7fe;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
