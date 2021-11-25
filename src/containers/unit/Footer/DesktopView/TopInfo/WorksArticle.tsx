import { FC, memo } from 'react'

import BlinkCursor from '@/widgets/BlinkCursor'

import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = Pick<TTopInfoProps, 'noBottomBorder'>

const Article: FC<TProps> = ({ noBottomBorder = false }) => {
  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      <BlinkCursor duration={2} />
      <CommunityTitle>作品集市</CommunityTitle>
    </Wrapper>
  )
}

export default memo(Article)
