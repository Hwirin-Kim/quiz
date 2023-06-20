interface IRecords {
  nickname: string;
  totalTime: number;
  totalCorrectAnswerCnt: number;
}

/**
 * 정답수와 시간을 기준으로 정렬한다.
 * 정답을 우선으로, 정답을 많이 맞추거나, 같은 수의 정답이라면 시간을 적게 쓴 기준으로 정렬된다.
 * @param records 사용자 퀴즈 레코드 배열
 * @returns 정렬된 레코드 배열
 */

export const sortRank = (records: IRecords[]): IRecords[] => {
  const sorted = [...records].sort((a, b) => {
    if (b.totalCorrectAnswerCnt !== a.totalCorrectAnswerCnt) {
      return b.totalCorrectAnswerCnt - a.totalCorrectAnswerCnt;
    } else {
      return a.totalTime - b.totalTime;
    }
  });
  return sorted;
};
