import React from 'react'
import { useTheme } from 'styled-components'

import { GITHUB, API_SERVER_ADDR, ISSUE_ADDR, BUILD_VERSION } from '@/config'
import { ROUTE } from '@/constant'

import BottomInfo from '../BottomInfo'
import ContactBar from './ContactBar'

import {
  Wrapper,
  InnerWrapper,
  TopBarInfos,
  MainInfos,
  MainColumn,
  SiteInfo,
  SiteTitle,
  SiteDesc,
  SiteLogo,
  Column,
  Title,
  Body,
  Item,
  LinkItem,
} from '../../styles/desktop_view/digest_view'

import { toggleBusBanner } from '../../logic'

const DigestView = ({ layout, metric }) => {
  const theme = useTheme()

  const linkColors = {
    color: theme.footer.text,
    hoverColor: theme.footer.hover,
  }

  return (
    <Wrapper metric={metric}>
      <InnerWrapper layout={layout}>
        <TopBarInfos>
          <MainColumn>
            <SiteInfo>
              <SiteLogo />
            </SiteInfo>
            <SiteTitle>coderplanets</SiteTitle>
            <SiteDesc>关于</SiteDesc>
            <SiteDesc>加入我们</SiteDesc>
            <SiteDesc>OpenSource</SiteDesc>
            <SiteDesc>友情链接</SiteDesc>
            <SiteDesc>特别感谢</SiteDesc>
            {/* <SiteDesc
                href="https://github.com/groupher"
                rel="noopener noreferrer"
                target="_blank"
              >
                Power By Groupher | 2020
              </SiteDesc> */}
            {/* <SiteDesc
                href="http://beian.miit.gov.cn"
                rel="noopener noreferrer"
                target="_blank"
              >
                蜀ICP备17043722号-4
              </SiteDesc> */}
          </MainColumn>
        </TopBarInfos>
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
            <Title>About</Title>
            <Body>
              <LinkItem href="/home/post/1" {...linkColors}>
                关于本站
              </LinkItem>
              <LinkItem href={`${ISSUE_ADDR}`} {...linkColors}>
                反馈与建议
              </LinkItem>
              <LinkItem href="https://github.com/coderplanets" {...linkColors}>
                加入我们
              </LinkItem>
              <LinkItem href="/cps-support/posts" {...linkColors}>
                使用指南
              </LinkItem>
              <LinkItem href={`${ROUTE.FRIENDS}`} {...linkColors}>
                友情链接
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>增值服务</Title>
            <Body>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                成为会员
              </LinkItem>
              <LinkItem href={`${ROUTE.MEMBERSHIP}`} {...linkColors}>
                打赏支持(todo)
              </LinkItem>
            </Body>
          </Column>

          <Column>
            <Title>开发者</Title>
            <Body>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                技术栈
              </LinkItem>
              <LinkItem href="/cps-support/post/42" {...linkColors}>
                文档中心
              </LinkItem>
              <LinkItem href={`${API_SERVER_ADDR}`} {...linkColors}>
                API
              </LinkItem>
              <LinkItem href={`${GITHUB}`} {...linkColors}>
                Github
              </LinkItem>
            </Body>
          </Column>
          <Column>
            <Title>商务合作</Title>
            <Body>
              <Item as="span" normal onClick={toggleBusBanner}>
                赞助社区
              </Item>
              <Item as="span" normal onClick={toggleBusBanner}>
                商务合作
              </Item>
            </Body>
          </Column>
          <Column margin="30px">
            <Title>网站状态</Title>
            <Body>
              <Item as="span" normal>
                部署版本: {BUILD_VERSION}
              </Item>
              <Item as="span" normal>
                开发计划
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
            </Body>
          </Column>
        </MainInfos>
      </InnerWrapper>
      <ContactBar layout={layout} metric={metric} />
      <BottomInfo layout={layout} metric={metric} />
    </Wrapper>
  )
}

export default React.memo(DigestView)
