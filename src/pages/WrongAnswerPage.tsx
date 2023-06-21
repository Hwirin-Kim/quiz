import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { wrongAnswersAtom } from "../atom/atom";
import Button from "../components/common/Button";
import PageLayout from "../components/common/PageLayout";
import WrongAnswer from "../components/wronganswerpage/WrongAnswer";

export default function WrongAnswerPage() {
  const wrongAnswers = useRecoilValue(wrongAnswersAtom);
  const navigator = useNavigate();

  return (
    <PageLayout>
      <Container>
        <Title>오답 리스트</Title>
        {wrongAnswers.map((answer) => {
          return (
            <WrongAnswer
              question={answer.question}
              answer={answer.correct_answer}
            />
          );
        })}
        <ButtonWrap>
          <Button onClick={() => navigator(-1)}>뒤로가기</Button>
          <Button onClick={() => navigator("/")}>메인페이지</Button>
          <Button onClick={() => navigator("/rank")}>랭킹보기</Button>
        </ButtonWrap>
      </Container>
    </PageLayout>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
