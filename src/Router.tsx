import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import RankingPage from "./pages/RankingPage";
import ResultPage from "./pages/ResultPage";
import WrongAnswerPage from "./pages/WrongAnswerPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="rank" element={<RankingPage />} />
        <Route path="wrong" element={<WrongAnswerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
