import { FC, Fragment, memo } from 'react'

import type { TViewing } from '@/spec'
import { ICON_BASE } from '@/config'
import Button from '@/widgets/Buttons/Button'

import {
  ItemWrapper,
  CommunityIcon,
  CommunityTitle,
  Divider,
} from './styles/community_sticker'

type TProps = {
  data?: TViewing
  show?: boolean
}

const CommunitySticker: FC<TProps> = ({ show, data }) => {
  return (
    <Fragment>
      <ItemWrapper>
        <CommunityIcon src={`${ICON_BASE}/pl/javascript.svg`} />
        <CommunityTitle>Elixir</CommunityTitle>
        <Button size="tiny" ghost>
          &nbsp;加&nbsp;&nbsp;入&nbsp;
        </Button>
      </ItemWrapper>
      <Divider />
    </Fragment>
  )
}

export default memo(CommunitySticker)
