/*
 *
 * SourceSelector
 *
 */

import React from 'react'
// import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import CustomScroller from '@/components/CustomScroller'
import { Wrapper, Icon, Block, Title } from './styles/source_selector'

import sources from './fakeSources'

/* eslint-disable-next-line */
const log = buildLog('c:SourceSelector:index')

const SourceSelector = () => {
  return (
    <Wrapper>
      <CustomScroller
        direction="horizontal"
        innerHeight="70px"
        shadowSize="small"
      >
        {sources.map((item) => (
          <Block key={item.id}>
            <Icon src={item.icon} />
            <Title>{item.title}</Title>
          </Block>
        ))}
      </CustomScroller>
    </Wrapper>
  )
}

SourceSelector.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

SourceSelector.defaultProps = {}

export default React.memo(SourceSelector)
