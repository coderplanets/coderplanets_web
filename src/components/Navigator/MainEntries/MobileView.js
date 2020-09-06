import React from 'react'
// import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { TYPE, EVENT } from '@/constant'
import { send } from '@/utils'
// import Tooltip from '@/components/Tooltip'
// import MorePanel from '../MorePanel'
import { Wrapper, SiteLink, MobileIcon } from '../styles/main_entries'

export const openMobileNaviMenu = () => {
  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_MOBILE_NAVI_MENU })
}

const MainEntries = () => {
  return (
    <Wrapper onClick={openMobileNaviMenu}>
      <SiteLink as="span">
        <MobileIcon src={`${ICON_CMD}/header_mobile_more.svg`} />
      </SiteLink>
    </Wrapper>
  )
}

MainEntries.propTypes = {
  // type: T.oneOfType([T.string, T.instanceOf(null)]),
}

MainEntries.defaultProps = {
  // type: null,
}

export default React.memo(MainEntries)
