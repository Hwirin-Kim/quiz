import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import {
  nicknameAtom,
  totalCorrectAnswerCntAtom,
  totalTimeAtom,
} from "../atom/atom";

export default function ResultPage() {
  const nickname = useRecoilValue(nicknameAtom);
  const totalCorrectAnswerCnt = useRecoilValue(totalCorrectAnswerCntAtom);
  const totalTime = useRecoilValue(totalTimeAtom);
  console.log(totalTime);
  return (
    <Container>
      {nickname} {totalCorrectAnswerCnt} {totalTime}
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #a6a6ce;
`;
