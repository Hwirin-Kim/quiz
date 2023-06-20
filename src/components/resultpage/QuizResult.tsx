import React from "react";
import styled from "styled-components";

interface IQuizResultProps {
  totalTime: number;
  totalCorrectAnswerCnt: number;
  totalWrongAnswerCnt: number;
}

export default function QuizResult({
  totalTime,
  totalCorrectAnswerCnt,
  totalWrongAnswerCnt,
}: IQuizResultProps) {
  return (
    <Container>
      <ResultInfo>걸린시간</ResultInfo>
      <ResultInfo>{totalTime} 초</ResultInfo>

      <ResultInfo>총 정답 수</ResultInfo>
      <ResultInfo>{totalCorrectAnswerCnt} 개</ResultInfo>

      <ResultInfo>총 오답 수</ResultInfo>
      <ResultInfo>{totalWrongAnswerCnt} 개</ResultInfo>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: 8rem 4rem;
  place-items: center;
  margin: 1rem 0;
`;

const ResultInfo = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;
