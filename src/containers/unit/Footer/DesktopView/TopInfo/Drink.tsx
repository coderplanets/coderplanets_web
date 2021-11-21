import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  ArrowDividerIcon,
  Logo,
} from '../../styles/desktop_view/top_info/article'

const Drink: FC = () => {
  return (
    <Wrapper noBottomBorder>
      <InfoBar>
        <Logo />
      </InfoBar>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <CommunityTitle>来一杯</CommunityTitle>
    </Wrapper>
  )
}

export default memo(Drink)
