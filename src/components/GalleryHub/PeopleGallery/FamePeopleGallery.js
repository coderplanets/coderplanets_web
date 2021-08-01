/*
 *
 * FamePeopleList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import IconText from '@/components/IconText'
import CardHeader from './CardHeader'

import {
  Wrapper,
  Block,
  Body,
  Intro,
  Avatar,
  Title,
  Birthday,
  AKA,
  Digest,
  Footer,
} from '../styles/people_gallery/fame_people_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ProductGallery:index')

const tmpItems = [
  {
    id: '0',
    addr: 'Andrew Chi-Chih Yao',
    birthPlace: 'china',
    nationality: 'american',
    title: '姚期智',
    birthday: '1946-12-24 / 55岁',
    desc:
      '图灵奖首位的华人学者，主要研究计算理论及其在密码学和量子计算中的应用',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '1',
    addr: '查尔斯·萨克尔',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Charles P. Thacker',
    birthday: '1946-12-24 / 55岁',
    desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '2',
    addr: '理查德·马修·斯托曼',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Richard Matthew Stallman',
    birthday: '1946-12-24 / 55岁',
    desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/rms.png',
  },
]

const FamePeopleList = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
        >
          <CardHeader item={item} />
          <Body>
            <Avatar src={item.icon} />
            <Intro>
              <Title>{item.title}</Title>
              <AKA>({item.addr})</AKA>
              <Birthday>{item.birthday}</Birthday>
            </Intro>
          </Body>

          <Digest>{cutRest(item.desc, 50)}</Digest>

          <Footer>
            <IconText iconSrc={`${ICON}/article/heart-solid.svg`}>22</IconText>
            <IconText iconSrc={`${ICON}/article/viewed.svg`}>3343</IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

FamePeopleList.propTypes = {
  items: T.arrayOf(T.object),
}

FamePeopleList.defaultProps = {
  items: tmpItems,
}

export default React.memo(FamePeopleList)
