import { FC, memo } from 'react'

import BlinkCursor from '@/widgets/BlinkCursor'
import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  SiteTitle,
  ShortName,
} from '../../styles/desktop_view/top_info/community'

type TProps = Pick<TTopInfoProps, 'title'>

const Community: FC<TProps> = ({ title = 'javascript' }) => {
  return (
    <Wrapper>
      <ShortName>CP</ShortName>
      <BlinkCursor duration={2} />
      <SiteTitle>{title}</SiteTitle>
    </Wrapper>
  )
}

export default memo(Community)
