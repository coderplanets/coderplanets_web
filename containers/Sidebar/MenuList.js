import React from 'react'
import R from 'ramda'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import MenuBar from './MenuBar'
import { Wrapper } from './styles/menu_list'

const SortableMenuBar = SortableElement(({ pin, item, activeRaw }) => (
  <MenuBar pin={pin} item={item} activeRaw={activeRaw} />
))

const MenuList = SortableContainer(({ items, pin, activeRaw }) => {
  const homeCommunities = R.filter(R.propEq('raw', 'home'), items)
  const sortableCommunities = R.reject(R.propEq('raw', 'home'), items)

  return (
    <Wrapper>
      {homeCommunities.map(item => (
        <MenuBar key={item.raw} pin={pin} item={item} activeRaw={activeRaw} />
      ))}
      {sortableCommunities.map((item, index) => (
        <SortableMenuBar
          index={index}
          key={item.raw}
          pin={pin}
          item={item}
          activeRaw={activeRaw}
        />
      ))}
    </Wrapper>
  )
})

export default MenuList
