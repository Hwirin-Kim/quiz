import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { scoreRecordAtom } from "../atom/atom";
import Button from "../components/common/Button";
import PageLayout from "../components/common/PageLayout";
import { sortRank } from "../utils/sortRank";

export default function RankingPage() {
  const userScoreData = useRecoilValue(scoreRecordAtom);
  const sortedRecord = sortRank(userScoreData);
  const navigator = useNavigate();

  if (userScoreData.length === 0) {
    return (
      <PageLayout>
        <ErrorWrap>
          <Error>기록이 없습니다.</Error>
          <Error>문제를 풀고 오세요!</Error>
          <Button onClick={() => navigator("/")}>메인페이지</Button>
        </ErrorWrap>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <RankWrapper marginbottom={1}>
        <Menu>순위</Menu>
        <Menu>닉네임</Menu>
        <Menu>정답수</Menu>
        <Menu>걸린시간</Menu>
      </RankWrapper>
      {sortedRecord.map((userInfo, index) => {
        return (
          <RankWrapper marginbottom={0.5} key={userInfo.nickname + index}>
            <RankGridItem>{index + 1}.</RankGridItem>
            <RankGridItem>{userInfo.nickname}</RankGridItem>
            <RankGridItem>{userInfo.totalCorrectAnswerCnt} 개</RankGridItem>
            <RankGridItem>{userInfo.totalTime} 초</RankGridItem>
          </RankWrapper>
        );
      })}
      <ButtonWrap>
        <Button onClick={() => navigator(-1)}>뒤로가기</Button>
        <Button onClick={() => navigator("/")}>메인페이지</Button>
        <Button onClick={() => navigator("/quiz")}>다시풀기</Button>
        <Button onClick={() => navigator("/result")}>결과페이지</Button>
      </ButtonWrap>
    </PageLayout>
  );
}

const RankWrapper = styled.div<{ marginbottom: number }>`
  display: grid;
  justify-content: center;
  place-items: center;
  grid-template-columns: 3rem 10rem 5rem 8rem;
  margin-bottom: ${(props) => `${props.marginbottom}rem`};
`;

const RankGridItem = styled.p`
  font-size: 1.2rem;
`;

const Menu = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
