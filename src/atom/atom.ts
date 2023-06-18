import { atom } from "recoil";

export const quizData = atom({
  key: "quizData",
  default: {
    quizList: [],
  },
});

export const nicknameAtom = atom({
  key: "nicknameAtom",
  default: "",
});

export const totalCorrectAnswerCntAtom = atom({
  key: "totalAnswerCntAtom",
  default: 0,
});

export const totalTimeAtom = atom({
  key: "totalTimeAtom",
  default: 0,
});
