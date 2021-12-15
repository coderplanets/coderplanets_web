import { FC, memo } from 'react'

import Link from 'next/link'

import { ICON, GITHUB, BUILD_VERSION, ABOUT_LINK } from '@/config'
import { ROUTE } from '@/constant'

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

const MobileView: FC = () => (
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
      <Item>{BUILD_VERSION}</Item>
    </VersionWrapper>
  </Wrapper>
)

export default memo(MobileView)
