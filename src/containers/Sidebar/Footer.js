import React from 'react'
// eslint-disable-next-line import/named
import { ICON_CMD } from '@config'

import {
  Wrapper,
  InnerWrapper,
  SettingIcon,
  OptionWrapper,
  OptionItem,
  OptionDivider,
} from './styles/footer'

import { sortBtnOnClick } from './logic'

const Footer = ({ pin, showFooterShadow, sortOptActive }) => (
  <Wrapper pin={pin} dropShadow={showFooterShadow}>
    <InnerWrapper pin={pin}>
      <SettingIcon src={`${ICON_CMD}/setting.svg`} />
      <OptionWrapper pin={pin}>
        <OptionItem active={sortOptActive} onClick={() => sortBtnOnClick()}>
          排序
        </OptionItem>
        <OptionDivider />
        <OptionItem>分组</OptionItem>
      </OptionWrapper>
    </InnerWrapper>
  </Wrapper>
)

export default Footer
