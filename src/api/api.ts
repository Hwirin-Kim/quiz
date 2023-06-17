import axios from "axios";

export const getQuiz = async () => {
  const { data } = await axios.get(
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
  );
  return data;
};
