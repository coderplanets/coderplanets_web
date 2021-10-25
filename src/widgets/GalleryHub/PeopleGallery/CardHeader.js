import React from 'react'

import { ICON, ASSETS_ENDPOINT } from '@/config'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  NationsWrapper,
  NationFlag,
  MoreIcon,
  MenuItem,
} from '../styles/people_gallery/card_header'

const CardHeader = ({ item }) => {
  return (
    <Wrapper>
      <NationsWrapper>
        <NationFlag
          src={`${ASSETS_ENDPOINT}/navi/nation/${item.birthPlace}.png`}
          marginRight={item.birthPlace !== item.nationality}
        />
        {item.birthPlace !== item.nationality && (
          <NationFlag
            src={`${ASSETS_ENDPOINT}/navi/nation/${item.nationality}.png`}
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

export default React.memo(CardHeader)
