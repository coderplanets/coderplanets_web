import { FC, memo } from 'react'

import { INGroup, RGroup } from './Groups'
import { GROUPS } from './constant'

type TProps = {
  activeGroup: string
}

const Content: FC<TProps> = ({ activeGroup }) => {
  switch (activeGroup) {
    case 'R': {
      return <RGroup qr={GROUPS[activeGroup].QR} />
    }

    default: {
      return <INGroup qr={GROUPS[activeGroup].QR} />
    }
  }
}

export default memo(Content)
