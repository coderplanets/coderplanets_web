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
      <Linker>创建社区</Linker>
      <Linker>加入我们</Linker>
      <Linker>OpenSource</Linker>
      <Linker>特别感谢</Linker>
    </Wrapper>
  )
}

export default memo(HomeCommunity)
