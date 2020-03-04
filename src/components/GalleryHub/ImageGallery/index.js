/*
 *
 * ImageGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import OneColumnGallery from './OneColumnGallery'
import TwoColumnGallery from './TwoColumnGallery'
import ThreeColumnGallery from './ThreeColumnGallery'

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

const ImageGallery = ({ items, column }) => {
  switch (column) {
    case 2: {
      return <TwoColumnGallery items={items} />
    }
    case 3: {
      return <ThreeColumnGallery items={items} />
    }
    default: {
      return <OneColumnGallery items={items} />
    }
  }
}

ImageGallery.propTypes = {
  items: T.arrayOf(T.object),
  column: T.oneOf([1, 2, 3]),
}

ImageGallery.defaultProps = {
  items: tmpItems,
  column: 2,
}

export default React.memo(ImageGallery)
