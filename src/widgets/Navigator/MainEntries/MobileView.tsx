import { FC, memo } from 'react'

import { TYPE, EVENT } from '@/constant'
import { send } from '@/utils/helper'
import { Wrapper, SiteLink } from '../styles/main_entries'
import { MobileIcon } from '../styles/more_links'

export const openMobileNaviMenu = (): void => {
  send(EVENT.DRAWER.OPEN, {
    type: TYPE.DRAWER.MODELINE_MENU,
    data: TYPE.MM_TYPE.GLOBAL_MENU,
    options: { direction: 'top' },
  })
}

const MainEntries: FC = () => {
  return (
    <Wrapper onClick={openMobileNaviMenu}>
      <SiteLink as="span" testid="header-mobile">
        <MobileIcon />
      </SiteLink>
    </Wrapper>
  )
}

export default memo(MainEntries)
