/*
 *
 * ImageGallery
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import PagiFooter from '@components/PagiFooter'

import OneColumnGallery from './OneColumnGallery'
import TwoColumnGallery from './TwoColumnGallery'
import ThreeColumnGallery from './ThreeColumnGallery'
import MasonryGallery from './MasonryGallery'

import ColumnStyleSwitcher from './ColumnStyleSwitcher'

import { Wrapper } from '../styles/image_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ImageGallery:index')

const tmpItems = [
  {
    id: '0',
    addr: 'coderplanets.com',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
    // desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '1',
    addr: 'elixir.com',
    title: '威尼斯总督府',
    nation: 'italy',
    imgSrc: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wns.jpg',
    // desc: '最性感的开发者社区',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
  {
    id: '2',
    addr: 'coderplanets.com',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
    // desc: '最性感的开发者社区',
    icon:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
  },
  {
    id: '3',
    addr: 'elixir.com',
    title: '威尼斯总督府',
    nation: 'italy',
    imgSrc: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wns.jpg',
    // desc: '最性感的开发者社区',
    icon: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/elixir.png',
  },
]

const ImageGallery = ({ items, column }) => {
  const [activeColumn, setActiveColumn] = useState(column)

  let GalleryContent

  switch (activeColumn) {
    case 2: {
      GalleryContent = <TwoColumnGallery items={items} />
      break
    }
    case 3: {
      GalleryContent = <ThreeColumnGallery items={items} />
      break
    }
    case 4: {
      GalleryContent = <MasonryGallery items={items} />
      break
    }
    default: {
      GalleryContent = <OneColumnGallery items={items} />
      break
    }
  }

  return (
    <Wrapper>
      {GalleryContent}
      <PagiFooter margin={{ top: '60px', bottom: '80px' }}>
        <ColumnStyleSwitcher
          activeColumn={activeColumn}
          onSelect={setActiveColumn}
        />
      </PagiFooter>
    </Wrapper>
  )
}

ImageGallery.propTypes = {
  items: T.arrayOf(T.object),
  column: T.oneOf([1, 2, 3, 4]),
}

ImageGallery.defaultProps = {
  items: tmpItems,
  column: 3,
}

export default React.memo(ImageGallery)
