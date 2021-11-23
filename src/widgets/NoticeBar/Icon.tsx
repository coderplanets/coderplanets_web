import { FC, memo } from 'react'

import { LockIcon, ArchivedIcon, NoticeIcon, InfoIcon } from './styles/icon'

import type { TType } from './spec'
import { TYPE } from './constant'

type TProps = {
  type: TType
}

const Icon: FC<TProps> = ({ type }) => {
  switch (type) {
    case TYPE.ARCHIVED: {
      return <ArchivedIcon />
    }
    case TYPE.LOCK: {
      return <LockIcon />
    }
    case TYPE.INFO: {
      return <InfoIcon />
    }
    default: {
      return <NoticeIcon />
    }
  }
}

export default memo(Icon)
