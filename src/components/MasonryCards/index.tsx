/*
 *
 * MasonryCards
 *
 */

import React from 'react'
import Masonry from 'react-masonry-css'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Space } from '@/components/Common'
import IconText from '@/components/IconText'

import {
  Wrapper,
  JWrapper,
  JHeader,
  JCompanyScale,
  JTitle,
  JInfo,
  JSallery,
  JDesc,
  JFooter,
  Publisher,
  Avatar,
  PublisherInfo,
  AuthorName,
  PublishExtra,
  TechKeywords,
  Keyword,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:MasonryCards:index')

const items = [
  {
    id: 1,
    title: '美团 # 校园招聘',
    desc:
      '美团校招内推启动啦！！！校园招聘已启动～2021届应届生&&2022届实习, 美团校招内推启动啦！！！内推的优势： 免简历筛选，直通笔试，更大概率被发起面试， 极大增加通过概率 !… ',
  },
  {
    id: 2,
    title: 'Another item',
    desc:
      '美团校招内推启动啦！！！校园招聘已启动～2021届应届生&&2022届实习, 我们是？我们是字节跳动教育部门，部门发展迅猛，公司投入极大！今年更是海量 HC！ 真正的海量 HC！HC 高达三位数！并非某些公司我们是？我们是字节跳动教育部门，部门发展迅猛，公司投入极大！今年更是海量 HC！ 真正的海量 HC！HC 高达三位数！并非某些公司',
  },
  {
    id: 3,
    title: '多益网络',
    desc:
      '岗位多样，开发，美术，市场，运营，产品，设计，财务，法律等。不卡学历！各类岗位面试难度一般，对学历无歧视，内推保证直通笔试面试，拿个保底offer吧各位',
  },
  {
    id: 4,
    title: 'Here is the Fourth',
    desc: '美团校招内推启动啦！！！校园招聘已启动～2021届应届生&&2022届实习',
  },
  {
    id: 5,
    title: 'High Five',
    desc: '美团校招内推启动啦！！！校园招聘已启动～2021届应届生&&2022届实习',
  },
]

type TProps = {
  testid?: string
}

const MasonryCards: React.FC<TProps> = ({ testid = 'masonry-cards' }) => {
  return (
    <Wrapper testid={testid}>
      <Masonry
        breakpointCols={2}
        className="masonry-cards-grid"
        columnClassName="masonry-cards-grid_column"
      >
        {items.map((item) => (
          <JWrapper key={item.id}>
            <JHeader>
              <JTitle>{item.title}</JTitle>
              <JCompanyScale>10~15 人</JCompanyScale>
            </JHeader>
            <JInfo>
              <JSallery>成都</JSallery>
              <JSallery>前端</JSallery>
              <JSallery>15k-30k</JSallery>
            </JInfo>
            <JDesc>{item.desc}</JDesc>
            <JFooter>
              <Publisher>
                <Avatar src="https://avatars.githubusercontent.com/u/809410?s=64&v=4" />
                <PublisherInfo>
                  <AuthorName>mydearxym</AuthorName>
                  <PublishExtra>
                    <IconText iconSrc={`${ICON}/edit/publish-pen.svg`}>
                      三天前
                    </IconText>
                    <Space right={10} />
                    <IconText iconSrc={`${ICON}/article/comment.svg`}>
                      22
                    </IconText>
                  </PublishExtra>
                </PublisherInfo>
              </Publisher>
              <TechKeywords>
                {/* TODO: extract a community tooltip */}
                <Keyword>React</Keyword>
                <Keyword>TS</Keyword>
              </TechKeywords>
            </JFooter>
          </JWrapper>
        ))}
      </Masonry>
    </Wrapper>
  )
}

export default React.memo(MasonryCards)
