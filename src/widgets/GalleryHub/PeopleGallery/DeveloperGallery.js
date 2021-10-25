/*
 *
 * FamePeopleList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON, ASSETS_ENDPOINT } from '@/config'
import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import IconText from '@/widgets/IconText'
import CardHeader from './CardHeader'

import {
  Wrapper,
  Block,
  Body,
  Intro,
  SocialWrapper,
  Avatar,
  Title,
  Digest,
  WorksWrapper,
  WorkIcon,
  Footer,
} from '../styles/people_gallery/developer_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ProductGallery:index')

const tmpItems = [
  {
    id: '0',
    birthPlace: 'china',
    nationality: 'american',
    title: '姚期智',
    desc: '图灵奖首位的华人学者，主要研究计算理论及其在密码学和量子计算中的应用',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '1',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Charles P. Thacker',
    desc: '程序员，架构师，working at @Groupher',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '2',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Richard Matthew Stallman',
    desc: '最性感的开发者社区',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/rms.png',
  },
  {
    id: '3',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Richard Matthew Stallman',
    desc: '最性感的开发者社区',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/rms.png',
  },
]

const DeveloperGallery = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 3}
          borderRight={(index + 1) % 4 !== 0}
        >
          <CardHeader item={item} />
          <Body>
            <Avatar src={item.icon} />
            <Intro>
              <Title>{cutRest(item.title, 18)}</Title>
              <Digest>{cutRest(item.desc, 35)}</Digest>
            </Intro>
            <SocialWrapper>social list</SocialWrapper>
          </Body>

          <Footer>
            <WorksWrapper>
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/edu/harvard.png`} />
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/company/microsoft.png`} />
            </WorksWrapper>
            <IconText iconSrc={`${ICON}/article/viewed.svg`}>3343</IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

DeveloperGallery.propTypes = {
  items: T.arrayOf(T.object),
}

DeveloperGallery.defaultProps = {
  items: tmpItems,
}

export default React.memo(DeveloperGallery)
