import React from "react";
import { styled } from "styled-components";

const explain = [
  "닉네임 입력 후 퀴즈를 풀 수 있습니다.",
  "퀴즈 풀기 버튼을 누르면 시간이 카운트 됩니다.",
  "총 10문제이고 4개의 보기가 있는 객관식 형식입니다.",
  "보기의 정답을 선택하면 바로 정답처리 되니 신중히 골라주세요.",
  "정답을 선택해야만 다음 문제를 풀 수 있습니다.",
];

export default function ExplanationBox() {
  return (
    <ExplanationTextBox>
      <ExplanationTextTitle>퀴즈 설명</ExplanationTextTitle>
      <ExplanationTextOl>
        {explain.map((item, index) => {
          return <ExplanationTextLi key={item}>{item}</ExplanationTextLi>;
        })}
      </ExplanationTextOl>
    </ExplanationTextBox>
  );
}

const ExplanationTextBox = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExplanationTextTitle = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ExplanationTextOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ExplanationTextLi = styled.li`
  list-style-type: decimal;
  font-size: 1.2rem;
`;
