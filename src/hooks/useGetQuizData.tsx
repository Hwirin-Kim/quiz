import React, { useCallback, useEffect, useState } from "react";
import { getQuiz } from "../api/api";
import { fisherYates } from "../utils/fisherYates";

export default function useGetQuizData() {
  interface IQuizData {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: [];
    question: string;
    type: string;
  }

  interface IQuizList {
    question: string;
    correct_answer: string;
    answers: string[];
  }

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [quizList, setQuizList] = useState<IQuizList[]>([]);

  const fetchData = async () => {
    try {
      const { results } = await getQuiz();
      setIsLoading(false);
      transformData(results);
    } catch (err: any) {
      setIsLoading(false);
      setIsError(err);
      alert("퀴즈 정보를 불러오지 못했습니다! 다시시도하세요!");
    }
  };

  const transformData = useCallback((data: IQuizData[]) => {
    const transformedData = data.map((item: IQuizData) => {
      const answers = [item.correct_answer, ...item.incorrect_answers];
      const shuffledAnswers = fisherYates(answers);

      return {
        question: item.question,
        correct_answer: item.correct_answer,
        answers: shuffledAnswers,
      };
    });
    setQuizList(transformedData);
  }, []);

  useEffect(() => {
    if (quizList.length === 0) {
      fetchData();
    }
  }, []);

  return { isLoading, isError, quizList };
}
