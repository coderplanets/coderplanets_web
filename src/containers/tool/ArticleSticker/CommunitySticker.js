import React from 'react'

import { ICON_BASE } from '@/config'
import { Button } from '@/components/Buttons'

import {
  ItemWrapper,
  CommunityIcon,
  CommunityTitle,
  Divider,
} from './styles/community_sticker'

const CommunitySticker = () => {
  return (
    <React.Fragment>
      <ItemWrapper>
        <CommunityIcon src={`${ICON_BASE}/pl/javascript.svg`} />
        <CommunityTitle>Elixir</CommunityTitle>
        <Button size="tiny" ghost>
          &nbsp;加&nbsp;&nbsp;入&nbsp;
        </Button>
      </ItemWrapper>
      <Divider />
    </React.Fragment>
  )
}

export default React.memo(CommunitySticker)
