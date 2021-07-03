import { FC, memo } from 'react'

import BlinkCursor from '@/components/BlinkCursor'
import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  SiteTitle,
  ShortName,
} from '../../styles/desktop_view/top_info/community'

type TProps = Pick<TTopInfoProps, 'title' | 'noBottomBorder'>

const Community: FC<TProps> = ({
  title = 'javascript',
  noBottomBorder = false,
}) => {
  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <ShortName>CP</ShortName>
      </InfoBar>
      <BlinkCursor duration={2} />
      <SiteTitle>{title}</SiteTitle>
    </Wrapper>
  )
}

export default memo(Community)
