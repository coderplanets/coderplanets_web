import { FC, useState } from 'react'

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
} from '../styles/right_sticker/toc'

type TProps = {
  show: boolean
  testid?: string
}

const Toc: FC<TProps> = ({ show, testid = 'article-sticker-toc' }) => {
  const [expand, setExpand] = useState(true)

  return (
    <Wrapper testid={testid} show={show}>
      <HeaderWrapper>
        <TitleWrapper>
          <TocIcon src={`${ICON}/article/outline.svg`} />
          <TocTitle>大纲</TocTitle>
        </TitleWrapper>
        {!expand ? (
          <MenuClosedIcon
            src={`${ICON}/shape/menu-closed.svg`}
            onClick={() => setExpand(true)}
          />
        ) : (
          <MenuOpenedIcon
            src={`${ICON}/shape/menu-opened.svg`}
            onClick={() => setExpand(false)}
          />
        )}
      </HeaderWrapper>
      {expand && (
        <TocContentWrapper>
          <div>目录功能尚待开发</div>
        </TocContentWrapper>
      )}
    </Wrapper>
  )
}

export default Toc
