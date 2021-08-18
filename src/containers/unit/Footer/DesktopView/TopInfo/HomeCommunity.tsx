import { FC, memo } from 'react'

import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  SiteTitle,
  Linker,
  Logo,
} from '../../styles/desktop_view/top_info'

type TProps = Pick<TTopInfoProps, 'title'>

const HomeCommunity: FC<TProps> = ({ title = 'oderPlanets' }) => {
  return (
    <Wrapper>
      <InfoBar>
        <Logo />
      </InfoBar>
      <SiteTitle>{title}</SiteTitle>
      <Linker>关于</Linker>
      <Linker>支持我们</Linker>
      <Linker>特别感谢</Linker>
      <Linker>反馈 &amp; 建议</Linker>
      <Linker>访问统计</Linker>
    </Wrapper>
  )
}

export default memo(HomeCommunity)
