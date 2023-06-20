import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { scoreRecordAtom } from "../atom/atom";
import PageLayout from "../components/common/PageLayout";
import { sortRank } from "../utils/sortRank";

export default function RankingPage() {
  const userScoreData = useRecoilValue(scoreRecordAtom);

  const sortedRecord = sortRank(userScoreData);

  return (
    <PageLayout>
      <RankWrapper marginBottom={1}>
        <Menu>순위</Menu>
        <Menu>닉네임</Menu>
        <Menu>정답수</Menu>
        <Menu>걸린시간</Menu>
      </RankWrapper>
      {sortedRecord.map((userInfo, index) => {
        return (
          <RankWrapper marginBottom={0.5}>
            <RankGridItem>{index + 1}.</RankGridItem>
            <RankGridItem>{userInfo.nickname}</RankGridItem>
            <RankGridItem>{userInfo.totalCorrectAnswerCnt} 개</RankGridItem>
            <RankGridItem>{userInfo.totalTime} 초</RankGridItem>
          </RankWrapper>
        );
      })}
    </PageLayout>
  );
}

const RankWrapper = styled.div<{ marginBottom: number }>`
  display: grid;
  justify-content: center;
  place-items: center;
  grid-template-columns: 3rem 10rem 5rem 8rem;
  margin-bottom: ${(props) => `${props.marginBottom}rem`};
`;

const RankGridItem = styled.p`
  font-size: 1.2rem;
`;

const Menu = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;
