import { FC, memo } from 'react'

import Link from 'next/link'

import { ICON, GITHUB, BUILD_VERSION } from '@/config'

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
      <Link href="/post/1" passHref>
        <Item>关于</Item>
      </Link>
      <Divider space={8} radius={3} />
      <Link href="/feedback" passHref>
        <Item>建议反馈</Item>
      </Link>
      <Divider space={8} radius={3} />
      <Item>
        特别感谢 <ItemIcon src={`${ICON}/emotion/heart.png`} />
      </Item>
      <Divider space={8} radius={3} />
      <Link href={GITHUB} passHref>
        <Item>Github</Item>
      </Link>
    </SiteInfoWrapper>
    <VersionWrapper>
      <Item>{BUILD_VERSION}</Item>
    </VersionWrapper>
  </Wrapper>
)

export default memo(MobileView)
