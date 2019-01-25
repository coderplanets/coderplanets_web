import React from 'react'
import R from 'ramda'

import TrendLine from 'components/TrendLine'

import {
  Wrapper,
  MenuRow,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from './styles/menu_bar'

import { onCommunitySelect } from './logic'

const MenuBar = ({ pin, item, activeRaw }) => (
  <Wrapper onClick={onCommunitySelect.bind(this, item)}>
    <MenuItemBar>
      <MenuRow pin={pin} active={activeRaw === R.toLower(item.raw)}>
        <MenuItemIcon
          active={activeRaw === R.toLower(item.raw)}
          raw={item.raw}
          src={item.logo}
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
