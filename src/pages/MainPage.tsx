import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nicknameAtom } from "../atom/atom";
import Button from "../components/common/Button";
import useTimer from "../utils/useTimer";

export default function MainPage() {
  const [inputNickname, setInputNickname] = useState("");
  const [nickname, setNickname] = useRecoilState(nicknameAtom);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigator = useNavigate();
  const onChangeInputNickname = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputNickname(e.target.value);
  };

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
    <Container>
      <NicknameBanner>닉네임 입력</NicknameBanner>
      <NicknameInput onChange={onChangeInputNickname} />
      <Button disabled={buttonDisabled} onClick={onClickToQuizPage}>
        퀴즈풀기
      </Button>
      <ExplanationTextBox>
        <ExplanationTextTitle>퀴즈 설명</ExplanationTextTitle>
        닉네임을 입력하셔야 퀴즈를 풀 수 있습니다. <br />
        퀴즈 풀기 버튼을 누르고 나면 시간이 카운트됩니다. <br />
        4문제 객관식이며 보기를 클릭하면 바로 정답처리 되니 신중히 골라주세요.
        <br />
        정답을 선택하면 되돌릴 수 없습니다. <br /> 정답을 선택해야만 다음 문제로
        이동할 수 있습니다.
      </ExplanationTextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fad49b;
`;

const NicknameBanner = styled.span``;

const NicknameInput = styled.input``;

const ExplanationTextBox = styled.div``;

const ExplanationTextTitle = styled.p``;
