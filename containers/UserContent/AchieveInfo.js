import React from 'react'

import { ICON_ASSETS } from '../../config'

import { FocusLine } from '../../components'
import { Wrapper, Title, Desc } from './styles/achieve_info'

const AchieveInfo = () => (
  <Wrapper>
    <Title>个人成就</Title>
    <FocusLine
      before="共获得"
      iconSrc={`${ICON_ASSETS}/cmd/likev2.svg`}
      focus={18}
      after="赞"
    />
    <FocusLine
      before="创作的内容被收藏"
      iconSrc={`${ICON_ASSETS}/cmd/favoritev2.svg`}
      focus={187}
      after="次"
    />

    <Desc>xx,xx,xx 社区编辑</Desc>
  </Wrapper>
)

export default AchieveInfo
