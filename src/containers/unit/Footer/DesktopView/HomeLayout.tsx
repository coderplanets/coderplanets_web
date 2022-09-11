import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

import type { TThemeMap, TMetric, TOnlineStatus } from '@/spec'
import { GITHUB, ABOUT_LINK, APP_VERSION } from '@/config'
import { ROUTE } from '@/constant'
import { siteBirthDay } from '@/utils/helper'

import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'
import SocialList from '../ContactList'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  Column,
  Title,
  Body,
  Item,
  LinkItem,
} from '../styles/desktop_view/home_layout'

type TProps = {
  metric: TMetric
  onlineStatus: TOnlineStatus
}

const HomeView: FC<TProps> = ({ metric, onlineStatus }) => {
  const theme = useTheme() as TThemeMap

  const linkColors = {
    color: theme.footer.text,
    hoverColor: theme.footer.hover,
  }

  return (
    <Wrapper>
      <InnerWrapper metric={metric}>
        <TopInfo />
        <MainInfos>
          <Column>
            <Title>网站地图</Title>
            <Body>
              <LinkItem href={`${ROUTE.EXPLORE}`} {...linkColors}>
                子社区
              </LinkItem>
              <LinkItem href={`${ROUTE.WORKS}`} {...linkColors}>
                作品集市
              </LinkItem>
              <LinkItem href={`${ROUTE.COOL_GUIDE}`} {...linkColors}>
                酷导航
              </LinkItem>
              <LinkItem href={`${ROUTE.HAVE_A_DRINK}`} {...linkColors}>
                来一杯
              </LinkItem>
              <LinkItem href={`${ROUTE.MEETUPS}`} {...linkColors}>
                小聚
              </LinkItem>
              <LinkItem href="/makers" {...linkColors}>
                Makers
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>使用指南</Title>
            <Body>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                发帖须知
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                会员福利
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                隐私说明
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                存档规则
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                免责声明
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>开发者</Title>
            <Body>
              <Item as="span" normal>
                开发计划
              </Item>
              <LinkItem href="/feedback" {...linkColors}>
                文档中心
              </LinkItem>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                技术栈
              </LinkItem>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                API
              </LinkItem>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                Github
              </LinkItem>
            </Body>
          </Column>

          <Column margin="30px">
            <Title>网站状态</Title>
            <Body>
              <Item as="span" normal>
                版本: {APP_VERSION}
              </Item>
              <Item as="span" normal>
                年龄: {siteBirthDay('2019/02/01')}
              </Item>
            </Body>
            <br />
            <Title>用户</Title>
            <Body>
              <Item as="span" normal>
                注册人数: {onlineStatus.totalSubscribes}
              </Item>
              <Item as="span" normal>
                在线人数: {onlineStatus.realtimeVisitors}
              </Item>
              <Item as="span" normal>
                黑洞: --
              </Item>
            </Body>
          </Column>

          <Column>
            <Title>品牌</Title>
            <Body>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                价值观
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                名词解释
              </LinkItem>
              <LinkItem href={`${ABOUT_LINK}`} {...linkColors}>
                Logo &amp; 资源
              </LinkItem>
            </Body>
            <br />
            <Title>联系</Title>
            <Body>
              <SocialList />
            </Body>
          </Column>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(HomeView)
