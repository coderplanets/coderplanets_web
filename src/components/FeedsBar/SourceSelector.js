/*
 *
 * SourceSelector
 *
 */

import React from 'react'
// import T from 'prop-types'

import { buildLog } from '@utils'
import { HorizontalScroller } from '@components/CustomScroller'
import { Wrapper, Icon, Block, Title } from './styles/source_selector'

import sources from './fakeSources'

/* eslint-disable-next-line */
const log = buildLog('c:SourceSelector:index')

const SourceSelector = () => {
  return (
    <Wrapper>
      <HorizontalScroller innerHeight="70px">
        {sources.map(item => (
          <Block key={item.id}>
            <Icon src={item.icon} />
            <Title>{item.title}</Title>
          </Block>
        ))}
      </HorizontalScroller>
    </Wrapper>
  )
}

SourceSelector.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

SourceSelector.defaultProps = {}

export default React.memo(SourceSelector)
