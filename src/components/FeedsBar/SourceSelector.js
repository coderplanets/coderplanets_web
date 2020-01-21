/*
 *
 * SourceSelector
 *
 */

import React from 'react'
// import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import {
  Wrapper,
  InnerWrapper,
  Icon,
  Block,
  Title,
} from './styles/source_selector'

/* eslint-disable-next-line */
const log = buildLog('c:SourceSelector:index')

const sources = [
  {
    id: '0',
    icon: `${ICON_CMD}/hot/techcrunch.png`,
    title: 'techcrunch',
  },
  {
    id: '1',
    icon: `${ICON_CMD}/hot/hackernews.jpeg`,
    title: 'hackernews',
  },
  {
    id: '2',
    icon: `${ICON_CMD}/hot/infoq.jpg`,
    title: 'infoQ',
  },
  {
    id: '3',
    icon: `${ICON_CMD}/hot/techcrunch.png`,
    title: 'techcrunch',
  },
  {
    id: '4',
    icon: `${ICON_CMD}/hot/hackernews.jpeg`,
    title: 'hackernews',
  },
  {
    id: '5',
    icon: `${ICON_CMD}/hot/infoq.jpg`,
    title: 'infoQ',
  },
]

const SourceSelector = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {sources.map((item, index) => (
          <Block
            key={item.id}
            leftBorder={index === 0}
            rightBorder={index === sources.length - 1}
          >
            <Icon src={item.icon} />
            <Title>{item.title}</Title>
          </Block>
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

SourceSelector.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

SourceSelector.defaultProps = {}

export default React.memo(SourceSelector)
