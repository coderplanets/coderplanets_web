/*
 *
 * TagsBar
 *
 */

import { FC } from 'react'

import { VIEW } from '@/constant'
import type { TTag, TThread } from '@/spec'
import type { TStore } from './store'

import DesktopView from './DesktopView/index'
import CardView from './CardView'

export type TProps = {
  view?: string
  tagsBar?: TStore
  thread: TThread
  onSelect: (tag?: TTag) => void
  active: TTag
}

const TagsBar: FC<TProps> = (props) => {
  const { view } = props

  switch (view) {
    case VIEW.MOBILE: {
      // TODO:
      return <DesktopView {...props} />
    }

    case VIEW.COMMUNITY_CARD: {
      return <CardView {...props} />
    }

    default: {
      return <DesktopView {...props} />
    }
  }
}

export default TagsBar
