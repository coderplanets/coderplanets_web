/*
 *
 * OneColumnGallery
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
} from '../styles/image_gallery/one_column_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:ImageGallery:index')

const OneColumnGallery = ({ items }) => {
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

OneColumnGallery.propTypes = {
  items: T.arrayOf(T.object).isRequired,
}

OneColumnGallery.defaultProps = {}

export default React.memo(OneColumnGallery)
