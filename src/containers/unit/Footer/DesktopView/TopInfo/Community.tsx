import React, { FC } from 'react'

import { ICON } from '@/config'
import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  SiteTitle,
  ArrowDividerIcon,
  Logo,
} from '../../styles/desktop_view/top_info/community'

type TProps = Pick<TTopInfoProps, 'title' | 'noBottomBorder'>

const Community: FC<TProps> = ({
  title = 'javascript',
  noBottomBorder = false,
}) => {
  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <SiteTitle>{title}</SiteTitle>
    </Wrapper>
  )
}

export default React.memo(Community)
