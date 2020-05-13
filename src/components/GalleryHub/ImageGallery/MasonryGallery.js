import React from 'react'

import { ICON_CMD, ASSETS_ENDPOINT } from '@/config'

import IconText from '@/components/IconText'

import {
  Wrapper,
  Masonry,
  Brick,
  Image,
  Intro,
  IntroHead,
  Title,
  FlagIcon,
  Footer,
} from '../styles/image_gallery/masonry_gallery'

// src={`${ASSETS_ENDPOINT}/navi/nation/${item.nation}.png`}
const items = [
  {
    id: '0',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: `${ASSETS_ENDPOINT}/navi/cherry-plant.jpg`,
  },
  {
    id: '1',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: `${ASSETS_ENDPOINT}/navi/oranges-pomegranates.jpg`,
  },
  {
    id: '2',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wns.jpg',
  },
  {
    id: '3',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: `${ASSETS_ENDPOINT}/navi/strawberry.jpg`,
  },
  {
    id: '4',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: `${ASSETS_ENDPOINT}/navi/cherry-plant.jpg`,
  },
  {
    id: '5',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc: `${ASSETS_ENDPOINT}/navi/blueberries.jpg`,
  },
  {
    id: '6',
    title: '圣母百花大教堂',
    nation: 'italy',
    imgSrc:
      'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
  },
]

// https://w3bits.com/tools/masonry-generator/
const MasonryGallery = () => {
  // const MasonryGallery = ({items}) => {
  return (
    <Wrapper>
      <Masonry withBorder>
        {items.map(item => (
          <Brick key={item.id}>
            <Image src={item.imgSrc} />
            <Intro>
              <IntroHead>
                <Title>{item.title}</Title>
                <FlagIcon
                  src={`${ASSETS_ENDPOINT}/navi/nation/${item.nation}.png`}
                />
              </IntroHead>
              <Footer>
                <IconText iconSrc={`${ICON_CMD}/history_clock.svg`}>
                  1233 - 1430
                </IconText>
                <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>4567</IconText>
              </Footer>
            </Intro>
          </Brick>
        ))}
      </Masonry>
    </Wrapper>
  )
}

export default React.memo(MasonryGallery)
