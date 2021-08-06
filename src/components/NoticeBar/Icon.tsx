import { FC, memo } from 'react'

import { ICON } from '@/config'
import { LockIcon, NoticeIcon, InfoIcon } from './styles/icon'

type TProps = {
  type?: 'lock' | 'notice' | 'bot' | 'info'
}

const Icon: FC<TProps> = ({ type = 'notice' }) => {
  switch (type) {
    case 'lock': {
      return <LockIcon src={`${ICON}/shape/lock.svg`} />
    }
    case 'info': {
      return <InfoIcon src={`${ICON}/route/light.svg`} />
    }
    default: {
      return <NoticeIcon src={`${ICON}/shape/warning.svg`} />
    }
  }
}

export default memo(Icon)
