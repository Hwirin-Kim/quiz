import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type SetState<T> = Dispatch<SetStateAction<T>>;

interface INicknameInputProps {
  setState: SetState<string>;
}

export default function NicknameInput({ setState }: INicknameInputProps) {
  const onChangeInputNickname = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return <Input onChange={onChangeInputNickname} />;
}

const Input = styled.input`
  width: 200px;
  height: 2rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;
