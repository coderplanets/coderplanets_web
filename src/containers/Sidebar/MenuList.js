import React from 'react'
import dynamic from 'next/dynamic'
import { reject, propEq } from 'ramda'

import NormalMenuList from './NormalMenuList'
// import SortableMenuList from './SortableMenuList'

import { Wrapper } from './styles/menu_list'
import { onSortMenuEnd } from './logic'

export const SortableMenuList = dynamic(() => import('./SortableMenuList'), {
  /* eslint-disable react/display-name */
  loading: () => <div>..</div>,
})

const MenuList = ({ items, pin, sortOptActive, activeRaw, forceRerender }) => {
  const sortableCommunities = reject(propEq('raw', 'home'), items)

  return (
    <Wrapper>
      {!sortOptActive ? (
        <NormalMenuList
          communities={sortableCommunities}
          pin={pin}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
        />
      ) : (
        <SortableMenuList
          communities={sortableCommunities}
          sortOptActive={sortOptActive}
          pin={pin}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
          onSortEnd={onSortMenuEnd}
        />
      )}
    </Wrapper>
  )
}

export default React.memo(MenuList)
