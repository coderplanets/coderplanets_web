import React from 'react'
import { useTheme } from 'styled-components'

import type { TThemeMap } from '@/spec'
import { GITHUB, API_SERVER_ADDR, ISSUE_ADDR, BUILD_VERSION } from '@/config'
import { ROUTE } from '@/constant'

import TopInfo from '../TopInfo'
import BottomInfo from '../BottomInfo'
import SocialList from '../../SocialList'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  Column,
  Title,
  Body,
  Item,
  LinkItem,
} from '../../styles/desktop_view/digest_view'

type TProps = {
  metric: string
}

const DigestView: React.FC<TProps> = ({ metric }) => {
  const theme = useTheme() as TThemeMap

  const linkColors = {
    color: theme.footer.text,
    hoverColor: theme.footer.hover,
  }

  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
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
              <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                活动
              </LinkItem>
              <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                工作
              </LinkItem>
              <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                更多 ..
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>会员</Title>
            <Body>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                志愿者
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                成为会员
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                打赏支持
              </LinkItem>
            </Body>

            <br />
            <Title>商务</Title>
            <Body>
              <Item as="span" normal>
                投放广告
              </Item>
              <Item as="span" normal>
                赞助商
              </Item>
              {/* <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                友情链接
              </LinkItem> */}
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
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                Github
              </LinkItem>
            </Body>
          </Column>

          <Column margin="30px">
            <Title>网站状态</Title>
            <Body>
              <Item as="span" normal>
                部署版本: {BUILD_VERSION}
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
                小黑屋: --
              </Item>
            </Body>
          </Column>

          <Column>
            <Title>支持</Title>
            <Body>
              <LinkItem href="/home/post/1" {...linkColors}>
                违规举报
              </LinkItem>
              <LinkItem href="/cps-support/posts" {...linkColors}>
                反馈与建议
              </LinkItem>
              <LinkItem href={`${ISSUE_ADDR}`} {...linkColors}>
                帮助中心
              </LinkItem>
              <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                内容订阅
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
      <BottomInfo />
    </Wrapper>
  )
}

export default React.memo(DigestView)
