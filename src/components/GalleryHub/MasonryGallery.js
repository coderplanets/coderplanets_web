import React from 'react'

import { ASSETS_ENDPOINT } from '@config'
import { Wrapper, Masonry, Brick, Image } from './styles/masonry_gallery'

// src={`${ASSETS_ENDPOINT}/navi/nation/${item.nation}.png`}

// https://w3bits.com/tools/masonry-generator/
const MasonryGallery = () => {
  return (
    <Wrapper>
      <Masonry withBorder>
        <Brick>
          <Image src={`${ASSETS_ENDPOINT}/navi/cherry-plant.jpg`} />
        </Brick>
        <Brick>
          <Image src={`${ASSETS_ENDPOINT}/navi/oranges-pomegranates.jpg`} />
        </Brick>
        <Brick>
          <Image src={`${ASSETS_ENDPOINT}/navi/blueberries.jpg`} />
        </Brick>
        <Brick>
          <Image src={`${ASSETS_ENDPOINT}/navi/strawberry.jpg`} />
        </Brick>
      </Masonry>
    </Wrapper>
  )
}

export default React.memo(MasonryGallery)
