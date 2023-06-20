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
import PieChart from "../components/resultpage/PieChart";
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
      <ButtonWrap>
        <Button onClick={() => navigator("/")}>메인으로</Button>
        <Button onClick={() => navigator("/rank")}>랭킹보기</Button>
        <Button onClick={() => navigator("/quiz")}>다시풀기</Button>
      </ButtonWrap>
      <ChartWrap>
        <PieChart
          total={totalQuestionCnt}
          cnt={totalCorrectAnswerCnt}
          lineColor="success"
          size={200}
          title="정답률"
        />
        <PieChart
          total={totalQuestionCnt}
          cnt={totalWrongAnswerCnt}
          lineColor="wrong"
          size={200}
          title="오답률"
        />
      </ChartWrap>
    </PageLayout>
  );
}

const Nickname = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
