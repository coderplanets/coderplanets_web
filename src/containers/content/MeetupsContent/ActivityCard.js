import React from 'react'

import { ICON_CMD } from '@config'
import { cutFrom } from '@utils'

import DotDivider from '@components/DotDivider'

import {
  Wrapper,
  DatetimeWrapper,
  Date,
  Week,
  IntroWrapper,
  Title,
  TitleText,
  Tag,
  BodyWrapper,
  Icon,
} from './styles/activity_card'

const ActivityCard = ({ item }) => {
  return (
    <Wrapper>
      <DatetimeWrapper>
        <Date>{item.date}</Date>
        <Week>{item.week}</Week>
      </DatetimeWrapper>
      <IntroWrapper>
        <Title>
          <Tag>{item.type || '前端'}</Tag>
          <TitleText>{cutFrom(item.title, 40)}</TitleText>
        </Title>
        <BodyWrapper>
          {item.company} <DotDivider radius="3px" />
          <Icon src={`${ICON_CMD}/activity/activity_money.svg`} /> 200-300
          <DotDivider radius="3px" />
          <Icon src={`${ICON_CMD}/activity/activity_people.svg`} /> 200
          <DotDivider radius="3px" />
          <Icon src={`${ICON_CMD}/activity/activity_location.svg`} />
          深圳（南山区）
        </BodyWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

export default React.memo(ActivityCard)
