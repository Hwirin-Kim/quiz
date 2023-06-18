import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getQuiz } from "../api/api";
import { totalCorrectAnswerCntAtom } from "../atom/atom";
import useGetQuizData from "../utils/useGetQuizData";
import useTimer from "../utils/useTimer";

export default function QuizPage() {
  const { isLoading, isError, quizList } = useGetQuizData();
  const [currentQuizNumber, setCurrentQuizNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  const setTotalCorrectAnswerCnt = useSetRecoilState(totalCorrectAnswerCntAtom);
  const timer = useTimer();
  const navigator = useNavigate();

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

  console.log("정답입니까?", isCorrect);
  console.log(quizList[0]);
  if (isLoading) {
    return null;
  }
  return (
    <Container>
      <div>맞춘 갯수 : {totalCorrectAnswer} / 10</div>
      <Quiz>
        Question{currentQuizNumber + 1} {quizList[currentQuizNumber].question}
      </Quiz>
      {quizList[currentQuizNumber].answers.map((answer, index) => {
        return (
          <Answer
            onClick={() =>
              onClickSelectAnswer(
                quizList[currentQuizNumber].correct_answer,
                answer
              )
            }
          >
            {index + 1}. {answer}
          </Answer>
        );
      })}

      {isSelected && (
        <NextButton onClick={onClickNextQuiz}>
          {currentQuizNumber === quizList.length - 1 ? "결과보기" : "다음문제"}
        </NextButton>
      )}
      {isSelected &&
        (isCorrect ? (
          <ExplainText>정답입니다.</ExplainText>
        ) : (
          <ExplainText>오답입니다.</ExplainText>
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e89494;
`;

const Quiz = styled.div``;

const Answer = styled.div``;

const NextButton = styled.button``;

const ExplainText = styled.div``;
