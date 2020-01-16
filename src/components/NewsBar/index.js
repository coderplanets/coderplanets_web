/*
 *
 * NewsBar
 *
 */

import React, { useRef } from 'react'
import T from 'prop-types'
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { ICON_CMD } from '@config'
import { buildLog } from '@utils'
import { useCustomScroll } from '@hooks'

import { SpaceGrow } from '@components/BaseStyled'
import SourceSelector from './SourceSelector'
import List from './List'

import { Wrapper, Header, NumIcon, FunctionIcon, Footer, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NewsBar:index')

const NewsBar = ({ title, numIndex }) => {
  // const ref = React.createRef()
  const ref = useRef(null)
  useCustomScroll(ref)

  return (
    <Wrapper ref={ref}>
      <Header>
        <NumIcon src={`${ICON_CMD}/hot/num_${numIndex}.svg`} />
        <Title>{title}</Title>
        <SpaceGrow />
        <FunctionIcon src={`${ICON_CMD}/hot/info.svg`} />
      </Header>
      <SourceSelector />
      <List />
      <Footer />
    </Wrapper>
  )
}

NewsBar.propTypes = {
  title: T.string.isRequired,
  // https://www.npmjs.com/package/prop-types
  numIndex: T.number,
}

NewsBar.defaultProps = {
  numIndex: 0,
}

export default React.memo(NewsBar)
