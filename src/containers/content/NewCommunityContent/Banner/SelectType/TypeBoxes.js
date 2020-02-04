import React from 'react'

import Checker from '@components/Checker'
import {
  Wrapper,
  Box,
  HeaderText,
  MainText,
  FooterText,
} from '../../styles/banner/select_type/type_boxes'

import { LN, communityTypeOnChange } from '../../logic'

const TypeBoxes = ({ communityType }) => {
  const {
    COMMUNITY_TYPE: { STANDER, CITY, WORK, TEAM },
  } = LN
  return (
    <Wrapper>
      <Box
        active={communityType === STANDER}
        onClick={() => communityTypeOnChange(STANDER)}
      >
        <HeaderText>
          <div>免费</div>
          <Checker checked={communityType === STANDER} hiddenMode />
        </HeaderText>
        <MainText>标准型</MainText>
        <FooterText>已有 114 +</FooterText>
      </Box>
      <Box
        active={communityType === CITY}
        onClick={() => communityTypeOnChange(CITY)}
      >
        <HeaderText>
          <div>免费</div>
          <Checker checked={communityType === CITY} hiddenMode />
        </HeaderText>
        <MainText>同城类</MainText>
        <FooterText>已有 114 +</FooterText>
      </Box>
      <Box
        active={communityType === WORK}
        onClick={() => communityTypeOnChange(WORK)}
      >
        <HeaderText>
          <HeaderText>免费 / 可扩展</HeaderText>
          <Checker checked={communityType === WORK} hiddenMode />
        </HeaderText>
        <MainText>作品类</MainText>
        <FooterText>已有 12 +</FooterText>
      </Box>
      <Box
        active={communityType === TEAM}
        onClick={() => communityTypeOnChange(TEAM)}
      >
        <HeaderText>
          <HeaderText>免费 / 可扩展</HeaderText>
          <Checker checked={communityType === TEAM} hiddenMode />
        </HeaderText>
        <MainText>团队型</MainText>
        <FooterText>已有 14 +</FooterText>
      </Box>
    </Wrapper>
  )
}

export default TypeBoxes
