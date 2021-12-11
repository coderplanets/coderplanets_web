import { FC, memo, useCallback } from 'react'
import { toLower, isEmpty } from 'ramda'

import type { TCommunity } from '@/spec'
import { ICON_CMD } from '@/config'

import TrendLine from '@/widgets/TrendLine'

import {
  Wrapper,
  ActiveBar,
  DragIcon,
  MenuRow,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from '../styles/menu_list/menu_bar'

import { onCommunitySelect } from '../logic'

type TProps = {
  item: TCommunity
  pin: boolean
  sortOptActive?: boolean
  activeRaw: string
}

const MenuBar: FC<TProps> = ({
  pin,
  sortOptActive = false,
  item,
  activeRaw,
}) => {
  const handleSelect = useCallback(() => onCommunitySelect(item), [item])
  const contributesDigest = !isEmpty(item.contributesDigest)
    ? item.contributesDigest
    : [0, 0, 0, 0, 0, 0]

  return (
    <Wrapper onClick={handleSelect}>
      <ActiveBar active={!sortOptActive && activeRaw === toLower(item.raw)} />
      <DragIcon src={`${ICON_CMD}/drag.svg`} show={sortOptActive} />
      <MenuItemBar>
        <MenuRow sortOptActive={sortOptActive}>
          <MenuItemIcon
            key={item.raw}
            active={activeRaw === toLower(item.raw)}
            raw={item.raw}
            src={item.logo}
          />
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <MenuItemTitle pin={pin} active={activeRaw === toLower(item.raw)}>
            {item.title}
          </MenuItemTitle>

          <MiniChartWrapper pin={pin}>
            <TrendLine
              key={item.raw}
              data={contributesDigest}
              radius={15}
              width={7}
            />
          </MiniChartWrapper>
        </MenuRow>
      </MenuItemBar>
    </Wrapper>
  )
}

export default memo(MenuBar)
