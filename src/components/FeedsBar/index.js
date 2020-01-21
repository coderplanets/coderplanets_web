/*
 *
 * FeedsBar
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { SpaceGrow } from '@components/BaseStyled'
import SourceSelector from './SourceSelector'
import List from './List'

import {
  Wrapper,
  Header,
  HeaderShadow,
  NumIcon,
  FunctionIcon,
  Title,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FeedsBar:index')

const FeedsBar = ({ title, numIndex }) => {
  const [headerShadow, setHeaderShadow] = useState(false)

  return (
    <Wrapper>
      <Header>
        <NumIcon src={`${ICON_CMD}/hot/num_${numIndex}.svg`} />
        <Title>{title}</Title>
        <SpaceGrow />
        <FunctionIcon src={`${ICON_CMD}/hot/info.svg`} />
      </Header>
      <SourceSelector />
      <HeaderShadow dropShadow={headerShadow} />
      <List setHeaderShadow={setHeaderShadow} />
    </Wrapper>
  )
}

FeedsBar.propTypes = {
  title: T.string.isRequired,
  // https://www.npmjs.com/package/prop-types
  numIndex: T.number,
}

FeedsBar.defaultProps = {
  numIndex: 0,
}

export default React.memo(FeedsBar)
