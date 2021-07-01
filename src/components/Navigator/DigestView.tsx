import { FC, memo } from 'react'

import { METRIC } from '@/constant'
import {
  Breadcrumbs,
  Logo,
  LogoLink,
  LogoMargin,
  LineDivider,
  LogoText,
  OfflineWrapper,
  ActionText,
} from './styles'

import MainEntries from './MainEntries/index'

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
  metric: string
  showLogoText: boolean
  isOnline: boolean
}

const DigestView: FC<TProps> = ({ metric, showLogoText, isOnline }) => {
  return (
    <Breadcrumbs>
      <LogoLink href="/home/posts">
        <Logo />
        {showLogoText && <LogoText>CoderPlanets</LogoText>}
      </LogoLink>

      {showLogoText ? <LogoMargin /> : <LineDivider />}

      {isOnline ? (
        renderMainEntries(metric)
      ) : (
        <OfflineWrapper>您已离线，请检查网络设置</OfflineWrapper>
      )}
    </Breadcrumbs>
  )
}

export default memo(DigestView)
