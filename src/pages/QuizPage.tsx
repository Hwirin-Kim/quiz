import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  nicknameAtom,
  scoreRecordAtom,
  totalCorrectAnswerCntAtom,
  totalTimeAtom,
  wrongAnswersAtom,
} from "../atom/atom";
import Button from "../components/common/Button";
import LoadingSpinner from "../components/common/LoadingSpinner";
import PageLayout from "../components/common/PageLayout";
import Timer from "../components/common/Timer";
import SelectResult from "../components/quizpage/SelectResult";
import useGetQuizData from "../hooks/useGetQuizData";

const QuizPage = () => {
  const { isLoading, isError, quizList } = useGetQuizData();

  const [currentQuizNumber, setCurrentQuizNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const setTotalCorrectAnswerCnt = useSetRecoilState(totalCorrectAnswerCntAtom);
  const [wrongAnswers, setWrongAnswers] = useRecoilState(wrongAnswersAtom);
  const setUserScore = useSetRecoilState(scoreRecordAtom);
  const totalTime = useRecoilValue(totalTimeAtom);
  const nickname = useRecoilValue(nicknameAtom);

  const navigator = useNavigate();

  useEffect(() => {
    setWrongAnswers([]);
  }, []);

  //다음문제/결과보기 버튼 함수
  const onClickNextQuiz = useCallback(() => {
    setCurrentQuizNumber((prev) => prev + 1);
    setIsSelected(false);

    if (currentQuizNumber === quizList.length - 1) {
      setTotalCorrectAnswerCnt(totalCorrectAnswer);
      setUserScore((prev) => [
        ...prev,
        {
          nickname: nickname,
          totalTime: totalTime,
          totalCorrectAnswerCnt: totalCorrectAnswer,
        },
      ]);
      navigator("/result");
    }
  }, [currentQuizNumber, quizList, totalTime]);

  //정답 판별 함수
  const onClickSelectAnswer = useCallback(
    (answer: string, selectAnswer: string) => {
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
        setWrongAnswers([...wrongAnswers, quizList[currentQuizNumber]]);
      }
      if (currentQuizNumber === quizList.length - 1) {
        setQuizFinished(true);
      }
    },
    [isSelected, currentQuizNumber, quizList, wrongAnswers, setWrongAnswers]
  );

  //닉네임 입력을 하지 않고 디폴트 닉네임인 경우 메인으로 리다이렉트
  if (nickname === "O O O") {
    navigator("/");
  }

  if (isError) {
    navigator("/*");
  }

  if (isLoading) {
    return (
      <PageLayout>
        <LoadingSpinner />
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Timer end={quizFinished} />
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
        {quizList[currentQuizNumber].answers.map((answer) => {
          return (
            <AnswerLi
              key={answer}
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
};

export default React.memo(QuizPage);

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
