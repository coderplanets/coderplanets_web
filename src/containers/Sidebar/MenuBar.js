import React from 'react'
import R from 'ramda'

import TrendLine from '@components/TrendLine'
import { uid } from '@utils'

import {
  Wrapper,
  ActiveBar,
  MenuRow,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from './styles/menu_bar'

import { onCommunitySelect } from './logic'

const MenuBar = ({ pin, item, activeRaw, forceRerender, dropShadow }) => (
  <Wrapper onClick={onCommunitySelect.bind(this, item)}>
    <ActiveBar pin={pin} active={activeRaw === R.toLower(item.raw)} />
    <MenuItemBar dropShadow={dropShadow}>
      <MenuRow pin={pin} active={activeRaw === R.toLower(item.raw)}>
        <MenuItemIcon
          key={uid.gen()}
          active={activeRaw === R.toLower(item.raw)}
          raw={item.raw}
          src={item.logo}
        />
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <MenuItemTitle
          pin={pin}
          active={activeRaw === R.toLower(item.raw)}
          forceRerender={forceRerender}
        >
          {item.title}
        </MenuItemTitle>

        <MiniChartWrapper pin={pin}>
          <TrendLine
            key={uid.gen()}
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
