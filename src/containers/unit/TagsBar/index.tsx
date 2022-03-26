/*
 *
 * TagsBar
 *
 */

import { FC } from 'react'

import { VIEW } from '@/constant'
import type { TTagMode } from '@/spec'
import type { TStore } from './store'

import DesktopView from './DesktopView/index'

export type TProps = {
  view?: string
  tagsBar?: TStore
  mode?: TTagMode
  onSelect: () => void
}

const TagsBar: FC<TProps> = (props) => {
  const { view } = props

  switch (view) {
    case VIEW.MOBILE: {
      // TODO:
      return <DesktopView {...props} />
    }

    // case VIEW.COMMUNITY_CARD: {
    //   return <DesktopView {...props} />
    // }

    default: {
      return <DesktopView {...props} />
    }
  }
}

export default TagsBar
