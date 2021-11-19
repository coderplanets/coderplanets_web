import { FC } from 'react'

import type { TUser } from '@/spec'
import type { TLayout } from '../spec'
import { LAYOUT } from '../constant'

import EditWorksLayout from './EditWorksLayout'
import WorksLayout from './WorksLayout'
import GuideLayout from './GuideLayout'
// create-works, works, guide-contribute

type TProps = {
  layout: TLayout
  users: TUser[]
  withSetter?: boolean
  onSetting: () => void
}

const Layout: FC<TProps> = ({ layout, users, withSetter, onSetting }) => {
  switch (layout) {
    case LAYOUT.WORKS: {
      return (
        <WorksLayout
          users={users}
          withSetter={withSetter}
          onSetting={onSetting}
        />
      )
    }

    case LAYOUT.GUIDE_CONTRIBUTE: {
      return (
        <GuideLayout
          users={users}
          withSetter={withSetter}
          onSetting={onSetting}
        />
      )
    }

    default: {
      return (
        <EditWorksLayout
          users={users}
          withSetter={withSetter}
          onSetting={onSetting}
        />
      )
    }
  }
}

export default Layout
