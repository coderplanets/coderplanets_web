/*
 *
 * FamePeopleList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON, ASSETS_ENDPOINT } from '@/config'
import { buildLog, cutFrom } from '@/utils'

import {
  Wrapper,
  Block,
  Header,
  LinkHead,
  NationsWrapper,
  NationFlag,
  IntroHead,
  BasicInfo,
  SocialWrapper,
  Icon,
  Title,
  Desc,
  WorksWrapper,
  WorkIcon,
  Footer,
  ViewInfo,
  ViewIcon,
  Number,
  MoreIcon,
} from './styles/developer_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ProductGallery:index')

const tmpItems = [
  {
    id: '0',
    birthPlace: 'china',
    nationality: 'american',
    title: '姚期智',
    desc:
      '图灵奖首位的华人学者，主要研究计算理论及其在密码学和量子计算中的应用',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '1',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Charles P. Thacker',
    desc: '程序员，架构师，working at @Groupher',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/yao-qi-zhi.jpg',
  },
  {
    id: '2',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Richard Matthew Stallman',
    desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/rms.png',
  },
  {
    id: '3',
    birthPlace: 'american',
    nationality: 'american',
    title: 'Richard Matthew Stallman',
    desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/fame-people/rms.png',
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
          <Header>
            <LinkHead>
              <NationsWrapper>
                <NationFlag
                  src={`${ASSETS_ENDPOINT}/navi/nation/${item.birthPlace}.png`}
                  marginRight={item.birthPlace !== item.nationality}
                />
                {item.birthPlace !== item.nationality && (
                  <NationFlag
                    src={`${ASSETS_ENDPOINT}/navi/nation/${item.nationality}.png`}
                  />
                )}
              </NationsWrapper>
              <MoreIcon src={`${ICON}/shape/more.svg`} />
            </LinkHead>
            <IntroHead>
              {/* this div is to avoid image collapse in y-axis for no reason .. */}
              {/* 浏览器上图片有时会伸展不开，像被挤压了一样，加一个 div 包一层可以防止这个情况 .. */}
              <div>
                <Icon src={item.icon} />
              </div>
              <BasicInfo>
                <Title>{cutFrom(item.title, 18)}</Title>
                <Desc>{cutFrom(item.desc, 35)}</Desc>
              </BasicInfo>
              <SocialWrapper>social list</SocialWrapper>
            </IntroHead>
          </Header>

          <Footer>
            <WorksWrapper>
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/edu/harvard.png`} />
              <WorkIcon src={`${ASSETS_ENDPOINT}/navi/company/microsoft.png`} />
            </WorksWrapper>
            <ViewInfo>
              <ViewIcon src={`${ICON}/article/viewed.svg`} />
              <Number>4743</Number>
            </ViewInfo>
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
