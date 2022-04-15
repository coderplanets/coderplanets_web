import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import Tooltip from '@/widgets/Tooltip'

import { SiteLink, ArrowIcon } from '../styles/more_links'

const MorePanel = dynamic(() => import('../MorePanel'), { ssr: false })

const MoreLink: FC = () => {
  return (
    <Tooltip
      // @ts-ignore
      content={<MorePanel />}
      placement="bottom"
      hideOnClick={false}
      trigger="click"
      noPadding
    >
      <SiteLink as="div" testid="header-more-link">
        更多 <ArrowIcon />
      </SiteLink>
    </Tooltip>
  )
}

export default memo(MoreLink)
