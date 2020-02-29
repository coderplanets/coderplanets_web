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

import { Wrapper, Header, HeaderShadow, FunctionIcon, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FeedsBar:index')

const FeedsBar = ({ title }) => {
  const [headerShadow, setHeaderShadow] = useState(false)

  return (
    <Wrapper>
      <Header>
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
}

FeedsBar.defaultProps = {}

export default React.memo(FeedsBar)
