import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { nicknameAtom, scoreRecordAtom, totalTimeAtom } from "../atom/atom";

interface IUseRecordProps {
  isSelected: boolean;
  totalCorrectAnswer: number;
  currentQuizNumber: number;
  quizListLength: number;
}
/**
퀴즈가 완료되었을 때, 사용자의 점수를 기록함
@param isSelected 답안이 선택되었는지 여부판단
@param totalCorrectAnswer 전체 정답 개수
@param currentQuizNumber 현재 퀴즈 번호
@param quizListLength 퀴즈 목록의 길이 -1
*/
export default function useRecord({
  isSelected,
  totalCorrectAnswer,
  currentQuizNumber,
  quizListLength,
}: IUseRecordProps) {
  const nickname = useRecoilValue(nicknameAtom);
  const setUserScore = useSetRecoilState(scoreRecordAtom);
  const totalTime = useRecoilValue(totalTimeAtom);

  useEffect(() => {
    if (currentQuizNumber === quizListLength && isSelected === true) {
      setUserScore((prev) => [
        ...prev,
        {
          nickname: nickname,
          totalTime: totalTime,
          totalCorrectAnswerCnt: totalCorrectAnswer,
        },
      ]);
    }
  }, [isSelected, currentQuizNumber]);
}
