import React from 'react'
import R from 'ramda'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import { TrendLine, CommunityHolder } from '../../components'

import {
  MenuItem,
  MenuRow,
  MenuItemWrapper,
  MenuItemBar,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
} from './styles/menu_list'

import { uid } from '../../utils'
import { onCommunitySelect } from './logic'

const SortableMenuBar = SortableElement(({ pin, item, activeRaw }) => (
  <MenuItemWrapper onClick={onCommunitySelect.bind(this, item)}>
    <MenuItemBar>
      <MenuRow pin={pin} active={activeRaw === R.toLower(item.raw)}>
        <MenuItemIcon
          active={activeRaw === R.toLower(item.raw)}
          nonFill={item.raw === 'javascript'}
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
  </MenuItemWrapper>
))

const MenuList = SortableContainer(({ items, pin, activeRaw }) => (
  <MenuItem>
    {items.map((item, index) => (
      <SortableMenuBar
        index={index}
        key={uid.gen()}
        pin={pin}
        item={item}
        activeRaw={activeRaw}
      />
    ))}
  </MenuItem>
))

export default MenuList
