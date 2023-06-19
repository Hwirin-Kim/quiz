import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { nicknameAtom } from "../atom/atom";
import Button from "../components/common/Button";
import PageLayout from "../components/common/PageLayout";
import ExplanationBox from "../components/mainpage/ExplanationBox";
import NicknameInput from "../components/mainpage/NicknameInput";

export default function MainPage() {
  const [inputNickname, setInputNickname] = useState("");
  const setNickname = useSetRecoilState(nicknameAtom);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    if (inputNickname === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [inputNickname]);

  const onClickToQuizPage = () => {
    setNickname(inputNickname);
    navigator("/quiz");
  };

  return (
    <PageLayout>
      <Title>Quiz</Title>
      <Nickname>닉네임 입력</Nickname>
      <InputWrap>
        <NicknameInput setState={setInputNickname} />
        <Button disabled={buttonDisabled} onClick={onClickToQuizPage}>
          퀴즈 풀기
        </Button>
      </InputWrap>
      <ExplanationBox />
    </PageLayout>
  );
}

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
`;
const Nickname = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
