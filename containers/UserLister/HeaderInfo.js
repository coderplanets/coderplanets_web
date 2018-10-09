import React from 'react'

import { ICON_CMD } from '../../config'
import {
  Wrapper,
  Title,
  DescLabel,
  DescIcon,
  DescText,
} from './styles/header_info'

import { TYPE } from '../../utils'

const HeaderInfo = ({ type, totalCount, brief }) => {
  switch (type) {
    case TYPE.USER_LISTER_FAVORITES: {
      return (
        <Wrapper>
          <Title>
            已收藏用户 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescIcon src={`${ICON_CMD}/paper.svg`} />
            <DescText> {brief}</DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    case TYPE.USER_LISTER_STARS: {
      return (
        <Wrapper>
          <Title>
            已赞用户 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescIcon src={`${ICON_CMD}/paper.svg`} />
            <DescText> {brief}</DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    default: {
      return <Title>WTF ?</Title>
    }
  }
}

export default HeaderInfo
