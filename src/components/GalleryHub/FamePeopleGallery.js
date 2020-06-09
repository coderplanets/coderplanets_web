/*
 *
 * FamePeopleList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD, ASSETS_ENDPOINT } from '@/config'
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
  Icon,
  Title,
  Birthday,
  Desc,
  ExpWrapper,
  EduWrapper,
  ExpIcon,
  Footer,
  VoteInfo,
  ViewInfo,
  UpVoteIcon,
  ViewIcon,
  Number,
} from './styles/fame_people_gallery'

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
          <Header>
            <LinkHead>
              <div>{item.addr}</div>
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
            </LinkHead>
            <IntroHead>
              {/* this div is to avoid image collapse in y-axis for no reason .. */}
              {/* 浏览器上图片有时会伸展不开，像被挤压了一样，加一个 div 包一层可以防止这个情况 .. */}
              <div>
                <Icon src={item.icon} />
              </div>
              <BasicInfo>
                <Title>{item.title}</Title>
                <Birthday>{item.birthday}</Birthday>
              </BasicInfo>
            </IntroHead>
          </Header>
          <Desc>{cutFrom(item.desc, 50)}</Desc>
          <ExpWrapper>
            <EduWrapper>
              <ExpIcon src={`${ASSETS_ENDPOINT}/navi/edu/harvard.png`} />
              <ExpIcon src={`${ASSETS_ENDPOINT}/navi/company/microsoft.png`} />
            </EduWrapper>
          </ExpWrapper>

          <Footer>
            <VoteInfo>
              <UpVoteIcon src={`${ICON_CMD}/arrow-up-o.svg`} />
              <Number>22</Number>
            </VoteInfo>
            <ViewInfo>
              <ViewIcon src={`${ICON_CMD}/view-o.svg`} />
              <Number>4743</Number>
            </ViewInfo>
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
