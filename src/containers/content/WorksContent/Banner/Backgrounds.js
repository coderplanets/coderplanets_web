import React from 'react'

import { ASSETS_ENDPOINT } from '@/config'
import { Wrapper, Icon } from '../styles/banner/backgrounds'

const icons = [
  {
    id: '0',
    src: `${ASSETS_ENDPOINT}/works/ufo.svg`,
    position: { top: '20%', left: '0' },
    size: 'small',
  },
  {
    id: '1',
    src: `${ASSETS_ENDPOINT}/works/android.svg`,
    position: { top: '10%', left: '15%' },
    size: 'small',
  },
  {
    id: '2',
    src: `${ASSETS_ENDPOINT}/works/design.svg`,
    position: { top: '15%', left: '35%' },
    size: 'small',
  },
  {
    id: '3',
    src: `${ASSETS_ENDPOINT}/works/cloud.svg`,
    position: { top: '17%', left: '45%' },
    size: 'large',
  },
  {
    id: '4',
    src: `${ASSETS_ENDPOINT}/works/github.svg`,
    position: { top: '10%', left: '20%' },
    size: 'small',
  },
  {
    id: '51',
    src: `${ASSETS_ENDPOINT}/works/desktop.svg`,
    position: { top: '45%', left: '30%' },
    // size: 'large',
    rotate: '5deg',
  },
  {
    id: '5',
    src: `${ASSETS_ENDPOINT}/works/beer.svg`,
    position: { top: '45%', left: '40%' },
    size: 'large',
    rotate: '-15deg',
  },
  {
    id: '6',
    src: `${ASSETS_ENDPOINT}/works/bitcoin.svg`,
    position: { top: '40%', left: '25%' },
    // size: '',
  },
  {
    id: '7',
    src: `${ASSETS_ENDPOINT}/works/game.svg`,
    position: { top: '65%', left: '20%' },
    size: 'large',
    rotate: '25deg',
  },
]

const Backgrounds = () => {
  return (
    <Wrapper>
      {icons.map(item => (
        <Icon
          key={item.id}
          src={item.src}
          top={item.position.top}
          left={item.position.left}
          size={item.size}
          rotate={item.rotate}
        />
      ))}
    </Wrapper>
  )
}

export default React.memo(Backgrounds)
