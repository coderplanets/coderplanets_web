import React, { FC, useCallback } from 'react'

import type { TTabItem } from '@/spec'
import LocalIcon from './LocalIcon'
import { Wrapper, Icon } from '../styles/tabs/tab_icon'

type TProps = {
  item: TTabItem
  clickableRef: {
    current: HTMLElement
  }
  active: boolean
}

const TabIcon: FC<TProps> = ({
  item: { localIcon, icon },
  clickableRef,
  active,
}) => {
  const IconCmp = localIcon ? (
    <LocalIcon raw={localIcon} active={active} small={false} />
  ) : (
    <Icon src={icon as string} active={active} />
  )

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation()
      clickableRef.current.click()
    },
    [clickableRef],
  )

  return <Wrapper onClick={handleClick}>{IconCmp}</Wrapper>
}

export default TabIcon
