import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { nicknameAtom, totalCorrectAnswerCntAtom } from "../atom/atom";
import Button from "../components/common/Button";
import PageLayout from "../components/common/PageLayout";
import SelectResult from "../components/quizpage/SelectResult";
import useGetQuizData from "../hooks/useGetQuizData";
import useRecord from "../hooks/useRecord";

import useTimer from "../hooks/useTimer";

export default function QuizPage() {
  const { isLoading, isError, quizList } = useGetQuizData();
  const [currentQuizNumber, setCurrentQuizNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);

  const setTotalCorrectAnswerCnt = useSetRecoilState(totalCorrectAnswerCntAtom);

  const timer = useTimer();
  const record = useRecord({
    isSelected,
    totalCorrectAnswer,
    currentQuizNumber,
    quizListLength: quizList.length - 1,
  });

  const navigator = useNavigate();
  const nickname = useRecoilValue(nicknameAtom);
  const onClickNextQuiz = () => {
    setCurrentQuizNumber((prev) => prev + 1);
    setIsSelected(false);

    if (currentQuizNumber === quizList.length - 1) {
      setTotalCorrectAnswerCnt(totalCorrectAnswer);
      navigator("/result");
    }
  };

  const onClickSelectAnswer = (answer: string, selectAnswer: string) => {
    setIsSelected(true);
    if (isSelected) {
      alert("이미 정답을 선택하셨습니다.");
      return null;
    }
    if (answer === selectAnswer) {
      setTotalCorrectAnswer((prev) => prev + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  //닉네임 입력을 하지 않고 디폴트 닉네임인 경우 메인으로 리다이렉트
  if (nickname === "O O O") {
    navigator("/");
  }

  if (isLoading) {
    return null;
  }
  return (
    <PageLayout>
      <Nickname>{nickname}님 화이팅하세요!</Nickname>
      <QuestionNum>Question {currentQuizNumber + 1}</QuestionNum>
      <CorrectAnswerPerTotal>
        정답 : {totalCorrectAnswer} / {quizList.length}
      </CorrectAnswerPerTotal>
      <Question
        dangerouslySetInnerHTML={{
          __html: quizList[currentQuizNumber].question,
        }}
      />

      <AnswerOl>
        {quizList[currentQuizNumber].answers.map((answer, index) => {
          return (
            <AnswerLi
              onClick={() =>
                onClickSelectAnswer(
                  quizList[currentQuizNumber].correct_answer,
                  answer
                )
              }
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </AnswerOl>

      {isSelected && (
        <>
          <Button onClick={onClickNextQuiz}>
            {currentQuizNumber === quizList.length - 1
              ? "결과보기"
              : "다음문제"}
          </Button>
          <SelectResult
            isCorrect={isCorrect}
            answer={quizList[currentQuizNumber].correct_answer}
          />
        </>
      )}
    </PageLayout>
  );
}

const QuestionNum = styled.div`
  font-size: 2.5rem;
`;

const Question = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const AnswerOl = styled.ol`
  padding-left: 1.5rem;
  margin-top: 1rem;
`;
const AnswerLi = styled.li`
  list-style-type: decimal;
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    font-weight: bold;
  }
`;

const CorrectAnswerPerTotal = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const Nickname = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;
