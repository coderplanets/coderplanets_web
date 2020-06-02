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
    src: `${ASSETS_ENDPOINT}/works/apple.svg`,
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
  },
  {
    id: '4',
    src: `${ASSETS_ENDPOINT}/works/android.svg`,
    position: { top: '15%', left: '48%' },
    size: 'small',
  },
  {
    id: '5',
    src: `${ASSETS_ENDPOINT}/works/github.svg`,
    position: { top: '10%', left: '20%' },
    size: 'small',
  },
  {
    id: '6',
    src: `${ASSETS_ENDPOINT}/works/snow.svg`,
    position: { top: '14%', left: '26%' },
    size: 'small',
    color: 'green',
    rotate: '15deg',
  },
  {
    id: '7',
    src: `${ASSETS_ENDPOINT}/works/desktop.svg`,
    position: { top: '45%', left: '25%' },
    // size: 'large',
    rotate: '5deg',
    color: 'red',
  },
  {
    id: '8',
    src: `${ASSETS_ENDPOINT}/works/game.svg`,
    position: { top: '45%', left: '43%' },
    size: 'large',
    rotate: '-15deg',
  },
  {
    id: '9',
    src: `${ASSETS_ENDPOINT}/works/bitcoin.svg`,
    position: { top: '28%', left: '18%' },
    // size: '',
  },
  {
    id: '10',
    src: `${ASSETS_ENDPOINT}/works/beer.svg`,
    position: { top: '65%', left: '20%' },
    rotate: '25deg',
  },
  {
    id: '11',
    src: `${ASSETS_ENDPOINT}/works/planet2.svg`,
    position: { top: '32%', left: '32%' },
    size: 'huge',
    rotate: '155deg',
  },
  {
    id: '12',
    src: `${ASSETS_ENDPOINT}/works/sex.svg`,
    position: { top: '28%', left: '51%' },
    size: 'large',
    rotate: '-35deg',
  },
  {
    id: '13',
    src: `${ASSETS_ENDPOINT}/works/star2.svg`,
    position: { top: '43%', left: '51%' },
    size: 'small',
    rotate: '-35deg',
    color: 'green',
  },
  {
    id: '14',
    src: `${ASSETS_ENDPOINT}/works/planet1.svg`,
    position: { top: '30%', left: '88%' },
    size: 'huge',
    rotate: '5deg',
  },
  {
    id: '15',
    src: `${ASSETS_ENDPOINT}/works/cross2.svg`,
    position: { top: '65%', left: '5%' },
    // size: 'large',
    rotate: '-5deg',
  },
  {
    id: '16',
    src: `${ASSETS_ENDPOINT}/works/roket.svg`,
    position: { top: '60%', left: '13%' },
    size: 'small',
    rotate: '5deg',
  },
  {
    id: '17',
    src: `${ASSETS_ENDPOINT}/works/glasses.svg`,
    position: { top: '68%', left: '51%' },
    size: 'small',
    rotate: '5deg',
    color: 'green',
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
