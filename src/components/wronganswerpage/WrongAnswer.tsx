import React from "react";
import styled from "styled-components";

interface IWrongAnswerProps {
  question: string;
  answer: string;
}

export default function WrongAnswer({ question, answer }: IWrongAnswerProps) {
  return (
    <Container>
      <Wrapper>
        <Icon>❓</Icon>
        <Question dangerouslySetInnerHTML={{ __html: question }} />
      </Wrapper>
      <Wrapper>
        <Icon>✅</Icon>
        <Answer dangerouslySetInnerHTML={{ __html: answer }} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const Question = styled.div`
  font-size: 1.2rem;
`;

const Answer = styled.div`
  font-size: 1.2rem;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;
