/*
 *
 * ImageGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import {
  Wrapper,
  Block,
  ImageWrapper,
  Intro,
  Image,
  IntroHead,
  Title,
  Footer,
  UpvoteInfo,
  ViewInfo,
  UpVoteIcon,
  ViewIcon,
  Number,
} from '../styles/image_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ImageGallery:index')

const tmpItems = [
  {
    id: '0',
    addr: 'coderplanets.com',
    title: '圣百花大教堂',
    imgSrc:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
    // desc: '最性感的开发者社区',
    tags: ['最性感', '开发者', '更好运'],
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '1',
    addr: 'elixir.com',
    title: '威尼斯总督府',
    imgSrc: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wns.jpg',
    // desc: '最性感的开发者社区',
    tags: ['最性感', '开发者', '更好运', '最性感', '开发者', '更好运'],
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
  {
    id: '2',
    addr: 'coderplanets.com',
    title: '圣百花大教堂',
    imgSrc:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
    // desc: '最性感的开发者社区',
    tags: ['最性感', '开发者', '更好运'],
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '3',
    addr: 'elixir.com',
    title: '威尼斯总督府',
    imgSrc: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wns.jpg',
    // desc: '最性感的开发者社区',
    tags: ['最性感', '开发者', '更好运', '最性感', '开发者', '更好运'],
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
]

const ImageGallery = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
        >
          <ImageWrapper>
            <Image src={item.imgSrc} />
          </ImageWrapper>
          <Intro>
            <IntroHead>
              <Title>{item.title}</Title>
            </IntroHead>
            <Footer>
              <UpvoteInfo>
                <UpVoteIcon src={`${ICON_CMD}/arrow-up-o.svg`} />
                <Number>22</Number>
              </UpvoteInfo>
              <ViewInfo>
                <ViewIcon src={`${ICON_CMD}/view-o.svg`} />
                <Number>4743</Number>
              </ViewInfo>
            </Footer>
          </Intro>
        </Block>
      ))}
    </Wrapper>
  )
}

ImageGallery.propTypes = {
  items: T.arrayOf(T.object),
}

ImageGallery.defaultProps = {
  items: tmpItems,
}

export default React.memo(ImageGallery)
