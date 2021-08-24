import React from 'react'

import {
  Wrapper,
  Divider,
  Section,
  Num,
  Title,
  IDTitle,
  IDNum,
  GradeTitle,
  GradeDesc,
  GradeLetter,
  GradeText,
} from './styles/numbers_pad'

const Numberspad = ({ user }) => {
  return (
    <Wrapper>
      <Section>
        <Num>TODO</Num>
        <Title>阅读总数</Title>
      </Section>
      <Divider />
      <Section>
        <Num>{user.achievement.articlesUpvotesCount}</Num>
        <Title>收获点赞</Title>
      </Section>
      <Divider />
      <Section>
        <Num>{user.achievement.articlesCollectsCount}</Num>
        <Title>被收藏</Title>
      </Section>
      <Divider />
      <Section>
        <Num>{user.views}</Num>
        <Title>主页被浏览</Title>
      </Section>
      <Divider />
      <Section>
        <GradeDesc>
          <GradeLetter>R</GradeLetter>
          <GradeText>ocket</GradeText>
        </GradeDesc>
        <GradeTitle>账户等级</GradeTitle>
      </Section>
      <Divider />
      <Section>
        <IDTitle>账户 ID</IDTitle>
        <IDNum>{user.id}</IDNum>
        <IDTitle>2020/02/13</IDTitle>
      </Section>
    </Wrapper>
  )
}

export default React.memo(Numberspad)
