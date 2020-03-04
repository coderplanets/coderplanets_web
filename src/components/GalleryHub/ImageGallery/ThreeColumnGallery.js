/*
 *
 * ThreeColumnGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD, ASSETS_ENDPOINT } from '@config'
import { buildLog } from '@utils'

import IconText from '@components/IconText'

import {
  Wrapper,
  Block,
  ImageWrapper,
  Intro,
  Image,
  IntroHead,
  Title,
  FlagIcon,
  Footer,
} from '../styles/image_gallery/three_column_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ImageGallery:index')

const ThreeColumnGallery = ({ items }) => {
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
              <FlagIcon src={`${ASSETS_ENDPOINT}/navi/nation/american.png`} />
            </IntroHead>
            <Footer>
              <IconText iconSrc={`${ICON_CMD}/history_clock.svg`}>
                1233 - 1430
              </IconText>
              <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>4567</IconText>
            </Footer>
          </Intro>
        </Block>
      ))}
    </Wrapper>
  )
}

ThreeColumnGallery.propTypes = {
  items: T.arrayOf(T.object).isRequired,
}

ThreeColumnGallery.defaultProps = {}

export default React.memo(ThreeColumnGallery)
