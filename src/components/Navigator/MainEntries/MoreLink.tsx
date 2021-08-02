import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'

import Tooltip from '@/components/Tooltip'

import MorePanel from '../MorePanel'
import { SiteLink, Icon } from '../styles/more_links'

const DesktopView: FC = () => {
  return (
    <Tooltip
      content={<MorePanel />}
      placement="bottom"
      hideOnClick={false}
      trigger="click"
      noPadding
    >
      <SiteLink testid="header-more-link">
        更多 <Icon src={`${ICON_CMD}/arrow_down.svg`} />
      </SiteLink>
    </Tooltip>
  )
}

export default memo(DesktopView)
