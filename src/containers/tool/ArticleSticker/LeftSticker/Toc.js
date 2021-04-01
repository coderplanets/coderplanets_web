import React from 'react'

import { ICON } from '@/config'
// import { cutRest } from '@/utils'
import {
  Wrapper,
  HeaderWrapper,
  TitleWrapper,
  TocIcon,
  TocTitle,
  MenuClosedIcon,
  MenuOpenedIcon,
  TocContentWrapper,
} from '../styles/left_sticker/toc'
import { toggleTocMenu } from '../logic'

const Toc = ({ show }) => {
  return (
    <Wrapper>
      <HeaderWrapper onClick={toggleTocMenu}>
        <TitleWrapper>
          <TocIcon src={`${ICON}/article/outline.svg`} />
          <TocTitle>大纲</TocTitle>
        </TitleWrapper>
        {!show ? (
          <MenuClosedIcon src={`${ICON}/shape/menu-closed.svg`} />
        ) : (
          <MenuOpenedIcon src={`${ICON}/shape/menu-opened.svg`} />
        )}
      </HeaderWrapper>
      {show && (
        <TocContentWrapper>
          <div>hello world</div>
          <div>hello world2</div>
        </TocContentWrapper>
      )}
    </Wrapper>
  )
}

export default Toc
