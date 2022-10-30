import { FC, memo } from 'react'
// import dynamic from 'next/dynamic'
import { reject, propEq } from 'ramda'

import type { TCommunity } from '@/spec'
import { HCN } from '@/constant'
import NormalMenuList from './NormalMenuList'

import { Wrapper } from '../styles/menu_list/index'
// import { onSortMenuEnd } from '../logic'

// export const SortableMenuList = dynamic(() => import('./SortableMenuList'), {
//   /* eslint-disable react/display-name */
//   loading: () => <div>..</div>,
// })

type TProps = {
  items: TCommunity[]
  pin: boolean
  sortOptActive: boolean
  activeRaw: string
}

const MenuList: FC<TProps> = ({ items, pin, sortOptActive, activeRaw }) => {
  const sortableCommunities = reject(propEq('raw', HCN), items) as TCommunity[]

  return (
    <Wrapper>
      {!sortOptActive ? (
        <NormalMenuList
          communities={sortableCommunities}
          pin={pin}
          activeRaw={activeRaw}
        />
      ) : (
        // @ts-ignore
        <div>SortableMenuList</div>
        // <SortableMenuList
        //   communities={sortableCommunities}
        //   sortOptActive={sortOptActive}
        //   distance={5}
        //   pin={pin}
        //   activeRaw={activeRaw}
        //   onSortEnd={onSortMenuEnd}
        // />
      )}
    </Wrapper>
  )
}

export default memo(MenuList)
