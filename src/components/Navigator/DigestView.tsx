import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
// import BlinkCursor from '@/components/BlinkCursor'

import {
  Breadcrumbs,
  Logo,
  LogoLink,
  LogoText,
  OfflineWrapper,
  ActionText,
} from './styles'

import MainEntries from './MainEntries'
import { TC11NLayout } from '@/spec'

export const BlinkCursor = dynamic(() => import('@/components/BlinkCursor'), {
  ssr: false,
})

const renderMainEntries = (metric) => {
  switch (metric) {
    case METRIC.ARTICLE_EDITOR: {
      return <ActionText>发布帖子</ActionText>
    }

    default: {
      return <MainEntries />
    }
  }
}

type TProps = {
  metric: TMetric
  layout: TC11NLayout
  showLogoText: boolean
  isOnline: boolean
}

const DigestView: FC<TProps> = ({ metric, showLogoText, isOnline, layout }) => {
  return (
    <Breadcrumbs>
      <LogoLink href="/home/posts" layout={layout}>
        <Logo />
        {showLogoText && <LogoText>oderPlanets</LogoText>}
      </LogoLink>

      <BlinkCursor duration={1.6} height={14} left={5} right={2} />

      {isOnline ? (
        renderMainEntries(metric)
      ) : (
        <OfflineWrapper>您已离线，请检查网络设置</OfflineWrapper>
      )}
    </Breadcrumbs>
  )
}

export default memo(DigestView)
