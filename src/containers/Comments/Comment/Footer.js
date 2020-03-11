import React from 'react'
import TimeAgo from 'timeago-react'

import { SpaceGrow } from '@components/BaseStyled'
import DotDivider from '@components/DotDivider'

import Actions from './Actions'

import { Wrapper, PublishDateWrapper } from './styles/footer'

const Footer = ({ data, accountInfo }) => (
  <Wrapper>
    <PublishDateWrapper>
      <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
    </PublishDateWrapper>
    <DotDivider radius="3px" space="6px" />
    <Actions data={data} accountInfo={accountInfo} />
    <SpaceGrow />
  </Wrapper>
)

export default React.memo(Footer)
