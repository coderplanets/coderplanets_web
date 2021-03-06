/*
 *
 * CommunitySubscribeBadge
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import Button from '@/components/Buttons/Button'

import { Wrapper, Title, Desc, BtnWrapper, BottomLine } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunitySubscribeBadge:index')

const CommunitySubscribeBadge = ({ testId }) => {
  return (
    <Wrapper testId={testId}>
      <Title>Coderplanets</Title>
      <Desc>最性感的开发者社区</Desc>

      <BtnWrapper>
        <Button size="small" type="primary" ghost>
          已加入
        </Button>
      </BtnWrapper>
      <BottomLine />
    </Wrapper>
  )
}

CommunitySubscribeBadge.propTypes = {
  testId: T.string,
}

CommunitySubscribeBadge.defaultProps = {
  testId: 'community-subscribe-badge',
}

export default React.memo(CommunitySubscribeBadge)
