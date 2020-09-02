import React from 'react'
import { useTheme } from 'styled-components'

import { GITHUB, API_SERVER_ADDR, ISSUE_ADDR, BUILD_VERSION } from '@/config'
import { ROUTE } from '@/constant'

import BottomInfo from '../BottomInfo'
import MobilBottomInfo from '../MobilBottomInfo'

import ContactBar from './ContactBar'

import {
  Wrapper,
  InnerWrapper,
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
} from '../styles/digest_view'

import {
  toggleSponsorHelper,
  toggleBusBanner,
  toggleSeniorHelper,
} from '../logic'

const DigestView = ({ layout }) => {
  const theme = useTheme()

  const linkColors = {
    color: theme.footer.text,
    hoverColor: theme.footer.hover,
  }

  return (
    <Wrapper>
      <InnerWrapper layout={layout}>
        <MainInfos>
          <MainColumn>
            <SiteInfo>
              <SiteLogo />
            </SiteInfo>
            <div>
              <SiteTitle>coderplaents</SiteTitle>
              <SiteDesc
                href="https://github.com/groupher"
                rel="noopener noreferrer"
                target="_blank"
              >
                Power By Groupher | 2020
              </SiteDesc>
              <SiteDesc
                href="http://beian.miit.gov.cn"
                rel="noopener noreferrer"
                target="_blank"
              >
                蜀ICP备17043722号-4
              </SiteDesc>
            </div>
          </MainColumn>
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
              <Item as="span" normal onClick={toggleSeniorHelper}>
                成为会员
              </Item>
              <Item as="span" normal onClick={toggleSponsorHelper}>
                打赏支持
              </Item>
            </Body>
          </Column>

          <Column>
            <Title>开发者</Title>
            <Body>
              <LinkItem href="/cps-support/post/42" {...linkColors}>
                开发者指南
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
            <Title>本站状态</Title>
            <Body>
              <Item as="span" normal>
                构建版本: {BUILD_VERSION}
              </Item>
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
      <ContactBar layout={layout} />
      <BottomInfo layout={layout} />
      <MobilBottomInfo />
    </Wrapper>
  )
}

export default React.memo(DigestView)
