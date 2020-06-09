import React from 'react'

import { ISSUE_ADDR } from '@/config'

import { cutFrom } from '@/utils'
import {
  Wrapper,
  Title,
  IconsWrapper,
  Site,
  SiteInfo,
  SiteTitle,
  SiteLink,
  SiteIcon,
  Footer,
} from './styles/radar_note'

const whiteList = [
  {
    title: '湾区日报',
    link: 'https://wanqu.co/',
    logo:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/radar_source/wanqu.png',
  },
  {
    title: 'solidot',
    link: 'https://www.solidot.org/',
    logo:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/radar_source/solidot.png',
  },
  {
    title: 'techcrunch',
    link: 'https://techcrunch.cn/',
    logo:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/radar_source/techcrunch.png',
  },
]

const RadarNote = () => (
  <Wrapper>
    <Title>感谢参与。目前为保证质量，只支持如下站点源转载信息:</Title>
    <IconsWrapper>
      {whiteList.map((item) => (
        <Site key={item.link}>
          <SiteIcon src={item.logo} />
          <SiteInfo>
            <SiteTitle>{item.title}</SiteTitle>
            <SiteLink
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cutFrom(item.link, 18)}
            </SiteLink>
          </SiteInfo>
        </Site>
      ))}
    </IconsWrapper>
    <Footer>
      <div>如果你有更好的新闻源或意见，欢迎参与社区讨论:</div>
      <SiteLink
        href={`${ISSUE_ADDR}/339`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {cutFrom(`${ISSUE_ADDR}/339`, 100)}
      </SiteLink>
    </Footer>
  </Wrapper>
)

export default React.memo(RadarNote)
