/*
 *
 * TwoColumnGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD, ASSETS_ENDPOINT } from '@/config'
import { buildLog } from '@/utils'

import IconText from '@/components/IconText'

import {
  Wrapper,
  Block,
  ImageWrapper,
  Intro,
  Image,
  IntroHead,
  FlagIcon,
  Title,
  Footer,
} from '../styles/image_gallery/two_column_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ImageGallery:index')

const TwoColumnGallery = ({ items }) => {
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
        </Block>
      ))}
    </Wrapper>
  )
}

TwoColumnGallery.propTypes = {
  items: T.arrayOf(T.object).isRequired,
}

TwoColumnGallery.defaultProps = {}

export default React.memo(TwoColumnGallery)
