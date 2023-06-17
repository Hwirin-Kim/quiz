import { atom } from "recoil";

export const quizData = atom({
  key: "quizData",
  default: {
    quizList: [],
  },
});
