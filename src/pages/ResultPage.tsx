import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import {
  nicknameAtom,
  totalCorrectAnswerCntAtom,
  totalTimeAtom,
} from "../atom/atom";
import PageLayout from "../components/common/PageLayout";

export default function ResultPage() {
  const nickname = useRecoilValue(nicknameAtom);
  const totalCorrectAnswerCnt = useRecoilValue(totalCorrectAnswerCntAtom);
  const totalTime = useRecoilValue(totalTimeAtom);
  const totalQuestionCnt = 10;
  const totalWrongAnswerCnt = totalQuestionCnt - totalCorrectAnswerCnt;
  return (
    <PageLayout>
      <Nickname>{nickname}님 문제풀이 결과</Nickname>
      <ResultInfoWrap>
        <Number>1.</Number>
        <ResultInfo>걸린시간</ResultInfo>
        <ResultInfo>{totalTime}초</ResultInfo>
        <Number>2.</Number>
        <ResultInfo>총 정답 수</ResultInfo>
        <ResultInfo>{totalCorrectAnswerCnt}개</ResultInfo>
        <Number>3.</Number>
        <ResultInfo>총 오답 수</ResultInfo>
        <ResultInfo>{totalWrongAnswerCnt}개</ResultInfo>
      </ResultInfoWrap>
    </PageLayout>
  );
}

const Nickname = styled.p``;

const ResultInfoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 5fr;
`;

const Number = styled.span``;

const ResultInfo = styled.p``;
