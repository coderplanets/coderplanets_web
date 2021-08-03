import { FC } from 'react'

import { ICON } from '@/config'
// import { cutRest } from '@/utils/helper'
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

type TProps = {
  show: boolean
  testid?: string
}

const Toc: FC<TProps> = ({ show, testid = 'article-sticker-toc' }) => {
  return (
    <Wrapper testid={testid}>
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
