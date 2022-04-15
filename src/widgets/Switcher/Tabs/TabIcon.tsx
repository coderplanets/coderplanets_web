import { FC, useCallback } from 'react'
import dynamic from 'next/dynamic'

import type { TTabItem } from '@/spec'
import { Wrapper, Icon } from '../styles/tabs/tab_icon'

type TProps = {
  item: TTabItem
  clickableRef: {
    current: HTMLElement
  }
  active: boolean
}

export const LocalIcon = dynamic(() => import('./LocalIcon'), {
  ssr: false,
})

const TabIcon: FC<TProps> = ({ item, clickableRef, active }) => {
  const { localIcon, icon } = item

  const IconCmp = localIcon ? (
    // @ts-ignore
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
