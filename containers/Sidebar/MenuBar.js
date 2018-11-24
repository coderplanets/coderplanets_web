import React from 'react'
import R from 'ramda'

import { TrendLine, CommunityHolder } from '../../components'
// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import {
  Wrapper,
  MenuRow,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from './styles/menu_bar'

import { NON_FILL_COMMUNITY } from '../../utils'
import { onCommunitySelect } from './logic'

const MenuBar = ({ pin, item, activeRaw }) => (
  <Wrapper onClick={onCommunitySelect.bind(this, item)}>
    <MenuItemBar>
      <MenuRow pin={pin} active={activeRaw === R.toLower(item.raw)}>
        <MenuItemIcon
          active={activeRaw === R.toLower(item.raw)}
          nonFill={R.contains(item.raw, NON_FILL_COMMUNITY)}
          src={item.logo}
          loading={<CommunityHolder text={item.title} place="sidebar" />}
        />
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <MenuItemTitle pin={pin} active={activeRaw === R.toLower(item.raw)}>
          {item.title}
        </MenuItemTitle>

        <MiniChartWrapper pin={pin}>
          <TrendLine
            data={item.contributesDigest}
            duration={300}
            radius={15}
            width={7}
          />
        </MiniChartWrapper>
      </MenuRow>
    </MenuItemBar>
  </Wrapper>
)

export default MenuBar
