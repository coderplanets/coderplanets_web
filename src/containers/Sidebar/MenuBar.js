import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { uid } from '@utils'

import TrendLine from '@components/TrendLine'

import {
  Wrapper,
  ActiveBar,
  DragIcon,
  MenuRow,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from './styles/menu_bar'

import { onCommunitySelect } from './logic'

const MenuBar = ({
  pin,
  sortOptActive,
  item,
  activeRaw,
  forceRerender,
  dropShadow,
}) => (
  <Wrapper onClick={onCommunitySelect.bind(this, item)}>
    <ActiveBar
      pin={pin}
      active={!sortOptActive && activeRaw === R.toLower(item.raw)}
    />
    <DragIcon src={`${ICON_CMD}/drag.svg`} show={sortOptActive} />
    <MenuItemBar dropShadow={dropShadow}>
      <MenuRow
        pin={pin}
        sortOptActive={sortOptActive}
        active={!sortOptActive && activeRaw === R.toLower(item.raw)}
      >
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
