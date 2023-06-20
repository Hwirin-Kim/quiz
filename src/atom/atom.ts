import { atom } from "recoil";

export const nicknameAtom = atom({
  key: "nicknameAtom",
  default: "O O O",
});

export const totalCorrectAnswerCntAtom = atom({
  key: "totalAnswerCntAtom",
  default: 0,
});

export const totalTimeAtom = atom({
  key: "totalTimeAtom",
  default: 0,
});

interface IScoreRecordAtom {
  nickname: string;
  totalTime: number;
  totalCorrectAnswerCnt: number;
}

export const scoreRecordAtom = atom<IScoreRecordAtom[]>({
  key: "scoreRecordAtom",
  default: [],
});
