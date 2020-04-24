/*
 *
 * FeedsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { SpaceGrow } from '@components/Common'
import SourceSelector from './SourceSelector'
import List from './List'

import { Wrapper, Header, FunctionIcon, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FeedsBar:index')

const FeedsBar = ({ title }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <SpaceGrow />
        <FunctionIcon src={`${ICON_CMD}/hot/info.svg`} />
      </Header>
      <SourceSelector />
      <List />
    </Wrapper>
  )
}

FeedsBar.propTypes = {
  title: T.string.isRequired,
}

FeedsBar.defaultProps = {}

export default React.memo(FeedsBar)
