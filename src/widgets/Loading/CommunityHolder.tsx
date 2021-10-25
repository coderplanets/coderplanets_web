import { FC, memo } from 'react'
import { toUpper } from 'ramda'

import {
  BannerWrapper,
  BannerText,
  CommunitiesText,
  SidebarText,
} from './styles/community_holder'

type TProps = {
  text: string
  place: 'banner' | 'sidebar' | 'discovery'
}

const CommunityHolder: FC<TProps> = ({ place = 'banner', text }) => {
  switch (place) {
    case 'sidebar':
      return <SidebarText>{toUpper(text.slice(0, 1))}</SidebarText>

    case 'discovery':
      return <CommunitiesText>{toUpper(text.slice(0, 2))}</CommunitiesText>

    default:
      return (
        <BannerWrapper>
          <BannerText>{text}</BannerText>
        </BannerWrapper>
      )
  }
}

export default memo(CommunityHolder)
