import { FC } from 'react'

import type { TUser } from '@/spec'
import type { TLayout } from '../spec'

import CreateWorksLayout from './CreateWorksLayout'
import WorksLayout from './WorksLayout'
// create-works, works, guide-contribute

type TProps = {
  layout: TLayout
  users: TUser[]
  withSetter?: boolean
  onSetting: () => void
}

const Layout: FC<TProps> = ({ layout, users, withSetter, onSetting }) => {
  switch (layout) {
    case 'works': {
      return (
        <WorksLayout
          users={users}
          withSetter={withSetter}
          onSetting={onSetting}
        />
      )
    }

    default: {
      return (
        <CreateWorksLayout
          users={users}
          withSetter={withSetter}
          onSetting={onSetting}
        />
      )
    }
  }
}

export default Layout
