import { FC, memo } from 'react'

import type { TGallery } from '@/spec'

import { ICON, ASSETS_ENDPOINT } from '@/config'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  NationsWrapper,
  NationFlag,
  NationName,
  MoreIcon,
  MenuItem,
} from '../styles/people_gallery/card_header'

type TProps = {
  item: TGallery
}

const CardHeader: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <NationsWrapper>
        <NationFlag
          src={`${ASSETS_ENDPOINT}/navi/nation/${item.birthPlace}.png`}
        />
        {item.birthPlace === item.nation && (
          <NationName>{item.nationName}</NationName>
        )}

        {item.birthPlace !== item.nation && (
          <NationFlag
            src={`${ASSETS_ENDPOINT}/navi/nation/${item.nation}.png`}
          />
        )}
      </NationsWrapper>
      <Tooltip
        content={
          <div>
            <MenuItem>分享</MenuItem>
            <MenuItem>参与编辑</MenuItem>
            <MenuItem>纠错</MenuItem>
          </div>
        }
        placement="bottom"
      >
        <MoreIcon src={`${ICON}/shape/more.svg`} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(CardHeader)
