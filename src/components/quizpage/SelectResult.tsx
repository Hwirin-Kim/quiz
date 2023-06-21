import React from "react";
import { styled } from "styled-components";

interface ISelectResultProps {
  isCorrect: boolean;
  answer: string;
}

export default function SelectResult({
  isCorrect,
  answer,
}: ISelectResultProps) {
  return (
    <Container>
      {isCorrect ? (
        <ResultText>정답입니다.</ResultText>
      ) : (
        <ResultText>
          오답입니다. 정답은{" "}
          <Answer dangerouslySetInnerHTML={{ __html: answer }} /> 입니다.{" "}
        </ResultText>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ResultText = styled.div`
  font-size: 1.2rem;
`;

const Answer = styled.span``;
