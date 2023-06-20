import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import {
  nicknameAtom,
  totalCorrectAnswerCntAtom,
  totalTimeAtom,
} from "../atom/atom";
import Button from "../components/common/Button";
import PageLayout from "../components/common/PageLayout";
import QuizResult from "../components/resultpage/QuizResult";

export default function ResultPage() {
  const nickname = useRecoilValue(nicknameAtom);
  const totalCorrectAnswerCnt = useRecoilValue(totalCorrectAnswerCntAtom);
  const totalTime = useRecoilValue(totalTimeAtom);
  const totalQuestionCnt = 10;
  const totalWrongAnswerCnt = totalQuestionCnt - totalCorrectAnswerCnt;

  const navigator = useNavigate();

  return (
    <PageLayout>
      <Nickname>{nickname}님 문제풀이 결과</Nickname>
      <QuizResult
        totalTime={totalTime}
        totalCorrectAnswerCnt={totalCorrectAnswerCnt}
        totalWrongAnswerCnt={totalWrongAnswerCnt}
      />
      <Button onClick={() => navigator("/rank")}>랭킹보기</Button>
      <Button onClick={() => navigator("/quiz")}>다시풀기</Button>
    </PageLayout>
  );
}

const Nickname = styled.p``;
