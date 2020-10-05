import React, { useCallback } from 'react'
import { toLower } from 'ramda'

import { ICON_CMD } from '@/config'
// import { uid } from '@/utils'

import TrendLine from '@/components/TrendLine'

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

const MenuBar = ({ pin, sortOptActive, item, activeRaw, forceRerender }) => {
  const handleSelect = useCallback(() => {
    onCommunitySelect(item)
  }, [item])

  return (
    <Wrapper onClick={handleSelect}>
      <ActiveBar
        pin={pin}
        active={!sortOptActive && activeRaw === toLower(item.raw)}
      />
      <DragIcon src={`${ICON_CMD}/drag.svg`} show={sortOptActive} />
      <MenuItemBar>
        <MenuRow
          pin={pin}
          sortOptActive={sortOptActive}
          active={!sortOptActive && activeRaw === toLower(item.raw)}
        >
          <MenuItemIcon
            key={item.raw}
            active={activeRaw === toLower(item.raw)}
            raw={item.raw}
            src={item.logo}
          />
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <MenuItemTitle
            pin={pin}
            active={activeRaw === toLower(item.raw)}
            forceRerender={forceRerender}
          >
            {item.title}
          </MenuItemTitle>

          <MiniChartWrapper pin={pin}>
            <TrendLine
              key={item.raw}
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
}

export default React.memo(MenuBar)
