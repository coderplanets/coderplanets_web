import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  ArrowDividerIcon,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = {
  title: string
}

const General: FC<TProps> = ({ title }) => {
  return (
    <Wrapper noBottomBorder>
      <InfoBar>
        <Logo />
      </InfoBar>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <CommunityTitle>{title}</CommunityTitle>
    </Wrapper>
  )
}

export default memo(General)
