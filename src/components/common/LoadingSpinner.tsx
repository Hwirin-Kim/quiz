import React from "react";
import { keyframes, styled } from "styled-components";

export default function LoadingSpinner() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  border: 0.3rem solid #5f5f5f;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;
