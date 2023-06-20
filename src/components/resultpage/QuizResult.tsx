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
      <Number>1.</Number>
      <ResultInfo>걸린시간</ResultInfo>
      <ResultInfo>{totalTime}초</ResultInfo>
      <Number>2.</Number>
      <ResultInfo>총 정답 수</ResultInfo>
      <ResultInfo>{totalCorrectAnswerCnt}개</ResultInfo>
      <Number>3.</Number>
      <ResultInfo>총 오답 수</ResultInfo>
      <ResultInfo>{totalWrongAnswerCnt}개</ResultInfo>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1.5rem 6rem 1fr;
`;
const Number = styled.span``;

const ResultInfo = styled.p``;
