import React from 'react'

import { ICON_CMD, ISSUE_ADDR } from '@config'

import Popover from '@components/Popover'
import DiscussLinker from '@components/DiscussLinker'

import {
  Wrapper,
  InnerWrapper,
  SettingIcon,
  OptionWrapper,
  OptionItem,
  OptionDivider,
} from './styles/footer'

import { sortBtnOnClick } from './logic'

const Footer = ({ pin, sortOptActive }) => (
  <Wrapper pin={pin}>
    <InnerWrapper pin={pin}>
      <SettingIcon src={`${ICON_CMD}/setting.svg`} />
      <OptionWrapper pin={pin}>
        <OptionItem active={sortOptActive} onClick={() => sortBtnOnClick()}>
          排序
        </OptionItem>
        <OptionDivider />
        <Popover
          placement="top"
          trigger="hover"
          content={<DiscussLinker title="分组" addr={`${ISSUE_ADDR}/597`} />}
        >
          <OptionItem>分组</OptionItem>
        </Popover>
      </OptionWrapper>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(Footer)
