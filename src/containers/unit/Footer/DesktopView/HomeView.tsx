import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

import type { TThemeMap, TC11NLayout, TMetric } from '@/spec'
import { GITHUB, API_SERVER_ADDR, ISSUE_ADDR, BUILD_VERSION } from '@/config'
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
} from '../styles/desktop_view/home_view'

type TProps = {
  metric: TMetric
  layout: TC11NLayout
}

const HomeView: FC<TProps> = ({ metric, layout }) => {
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
              <LinkItem href="/home/post/1" {...linkColors}>
                子社区
              </LinkItem>
              <LinkItem href={`${ISSUE_ADDR}`} {...linkColors}>
                作品集市
              </LinkItem>
              <LinkItem href="https://github.com/coderplanets" {...linkColors}>
                酷导航
              </LinkItem>
              <LinkItem href="/cps-support/posts" {...linkColors}>
                来一杯
              </LinkItem>
              <LinkItem href={`${ROUTE.SUPPORT_US}`} {...linkColors}>
                小聚
              </LinkItem>
              <LinkItem href={`${ROUTE.SUPPORT_US}`} {...linkColors}>
                Makers
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>使用指南</Title>
            <Body>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                发帖须知
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                会员福利
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                隐私说明
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                反馈&nbsp;&amp;&nbsp;建议
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                加入我们
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
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
              <LinkItem href="/cps-support/post/42" {...linkColors}>
                文档中心
              </LinkItem>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                技术栈
              </LinkItem>
              <LinkItem href={`${API_SERVER_ADDR}`} {...linkColors}>
                API
              </LinkItem>
              <LinkItem href={`${API_SERVER_ADDR}`} {...linkColors}>
                Github
              </LinkItem>
            </Body>
          </Column>

          <Column margin="30px">
            <Title>网站状态</Title>
            <Body>
              <Item as="span" normal>
                版本: {BUILD_VERSION}
              </Item>
              <Item as="span" normal>
                年龄: {siteBirthDay('2019/02/01')}
              </Item>
            </Body>
            <br />
            <Title>用户</Title>
            <Body>
              <Item as="span" normal>
                注册人数: --
              </Item>
              <Item as="span" normal>
                在线人数: --
              </Item>
              <Item as="span" normal>
                黑洞: --
              </Item>
            </Body>
          </Column>

          <Column>
            <Title>Brand</Title>
            <Body>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                价值观
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                名词解释
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
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
      <BottomInfo metric={metric} layout={layout} />
    </Wrapper>
  )
}

export default memo(HomeView)
