import React from 'react'

import { ICON_CMD, ISSUE_ADDR } from '@/config'

import Tooltip from '@/components/Tooltip'
import DiscussLinker from '@/components/DiscussLinker'

import {
  Wrapper,
  InnerWrapper,
  OptionWrapper,
  OptionItem,
  OptionIcon,
  OptionText,
  OptionDivider,
} from './styles/footer'

import { sortBtnOnClick } from './logic'

const Footer = ({ pin, sortOptActive }) => {
  return (
    <Wrapper pin={pin}>
      <InnerWrapper pin={pin}>
        <OptionWrapper pin={pin}>
          <OptionItem active={sortOptActive} onClick={() => sortBtnOnClick()}>
            <OptionIcon src={`${ICON_CMD}/sidebar_drag.svg`} />
            <OptionText>排序</OptionText>
          </OptionItem>
          <OptionDivider />
          <Tooltip
            placement="top"
            content={<DiscussLinker title="分组" addr={`${ISSUE_ADDR}/597`} />}
          >
            <OptionItem>
              <OptionIcon src={`${ICON_CMD}/sidebar_dir.svg`} />
              <OptionText>分组</OptionText>
            </OptionItem>
          </Tooltip>
        </OptionWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Footer)
