import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getQuiz } from "../api/api";
import useGetQuizData from "../utils/useGetQuizData";

export default function QuizPage() {
  const { isLoading, isError, quizList } = useGetQuizData();
  const [currentQuizNumber, setCurrentQuizNumber] = useState(0);
  console.log(quizList[0]);
  if (isLoading) {
    return null;
  }
  return (
    <Container>
      <Quiz>
        Question{currentQuizNumber + 1} {quizList[currentQuizNumber].question}
      </Quiz>
      {quizList[currentQuizNumber].answers.map((answer, index) => {
        return (
          <Answer>
            {index}. {answer}
          </Answer>
        );
      })}
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
