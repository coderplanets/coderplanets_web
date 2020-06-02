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
    src: `${ASSETS_ENDPOINT}/works/github.svg`,
    position: { top: '10%', left: '15%' },
    size: 'small',
  },
  {
    id: '4',
    src: `${ASSETS_ENDPOINT}/works/android.svg`,
    position: { top: '15%', left: '48%' },
    size: 'small',
  },
  {
    id: '5',
    src: `${ASSETS_ENDPOINT}/works/dinosaur.svg`,
    position: { top: '18%', left: '20%' },
  },
  {
    id: '6',
    src: `${ASSETS_ENDPOINT}/works/snow2.svg`,
    position: { top: '14%', left: '24%' },
    size: 'small',
    color: 'green',
    rotate: '15deg',
    opacity: 0.5,
  },
  {
    id: '7',
    src: `${ASSETS_ENDPOINT}/works/desktop.svg`,
    position: { top: '45%', left: '25%' },
    rotate: '5deg',
    color: 'red',
    opacity: 0.5,
  },
  {
    id: '8',
    src: `${ASSETS_ENDPOINT}/works/game.svg`,
    position: { top: '65%', left: '33%' },
    rotate: '-15deg',
  },
  {
    id: '9',
    src: `${ASSETS_ENDPOINT}/works/bitcoin.svg`,
    position: { top: '60%', left: '38%' },
  },
  {
    id: '10',
    src: `${ASSETS_ENDPOINT}/works/beer.svg`,
    position: { top: '65%', left: '20%' },
    rotate: '25deg',
  },
  {
    id: '11',
    src: `${ASSETS_ENDPOINT}/works/planet4.svg`,
    position: { top: '-240px', left: '28%' },
    size: 'huge',
    rotate: '0deg',
    opacity: 0.6,
  },
  {
    id: '12',
    src: `${ASSETS_ENDPOINT}/works/android.svg`,
    position: { top: '62%', left: '44%' },
    size: 'small',
    rotate: '-35deg',
  },
  {
    id: '14',
    src: `${ASSETS_ENDPOINT}/works/planet1.svg`,
    position: { top: '15%', left: '84%' },
    size: 'large',
    rotate: '5deg',
  },
  {
    id: '15',
    src: `${ASSETS_ENDPOINT}/works/cross2.svg`,
    position: { top: '65%', left: '5%' },
    rotate: '-5deg',
  },
  {
    id: '16',
    src: `${ASSETS_ENDPOINT}/works/roket.svg`,
    position: { top: '60%', left: '13%' },
    size: 'small',
    rotate: '5deg',
  },
]

const Backgrounds = () => {
  return (
    <Wrapper>
      {icons.map(({ id, position, ...restProps }) => (
        <Icon key={id} top={position.top} left={position.left} {...restProps} />
      ))}
    </Wrapper>
  )
}

export default React.memo(Backgrounds)
