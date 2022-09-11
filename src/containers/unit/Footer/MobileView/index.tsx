import { FC } from 'react'

import Link from 'next/link'

import type { TMetric } from '@/spec'
import { ICON, GITHUB, APP_VERSION, ABOUT_LINK } from '@/config'
import { bond } from '@/utils/mobx'
import { ROUTE } from '@/constant'

import type { TStore } from '../store'
import {
  Wrapper,
  SiteWrapper,
  Logo,
  SiteTitle,
  SiteInfoWrapper,
  Item,
  ItemIcon,
  Divider,
  VersionWrapper,
} from '../styles/mobile_view'
import { useInit } from '../logic'

type TProps = {
  footer?: TStore
  metric?: TMetric
}

const FooterContainer: FC<TProps> = ({ footer: store, metric }) => {
  useInit(store, metric)

  return (
    <Wrapper>
      <SiteWrapper>
        <Logo />
        <SiteTitle>oderPlanets</SiteTitle>
      </SiteWrapper>

      <SiteInfoWrapper>
        <Link href={`${ABOUT_LINK}`} passHref>
          <Item>关于</Item>
        </Link>
        <Divider space={8} radius={3} />
        <Link href="/feedback" passHref>
          <Item>建议反馈</Item>
        </Link>
        <Divider space={8} radius={3} />
        <Link href={`/${ROUTE.SPONSOR}`} passHref>
          <Item>
            特别感谢 <ItemIcon src={`${ICON}/emotion/heart.png`} />
          </Item>
        </Link>
        <Divider space={8} radius={3} />
        <Link href={GITHUB} passHref>
          <Item target="_blank">Github</Item>
        </Link>
      </SiteInfoWrapper>
      <VersionWrapper>
        <Item>{APP_VERSION}</Item>
      </VersionWrapper>
    </Wrapper>
  )
}

export default bond(FooterContainer, 'footer') as FC
