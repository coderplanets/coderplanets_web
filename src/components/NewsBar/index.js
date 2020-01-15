/*
 *
 * NewsBar
 *
 */

import React, { useRef } from 'react'
import T from 'prop-types'
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { buildLog } from '@utils'
import { useCustomScroll } from '@hooks'

import SourceSelector from './SourceSelector'
import List from './List'

import { Wrapper, Header, Footer, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NewsBar:index')

const NewsBar = ({ title }) => {
  // const ref = React.createRef()
  const ref = useRef(null)
  useCustomScroll(ref)

  return (
    <Wrapper ref={ref}>
      <Header>
        <Title>{title}</Title>
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
}

NewsBar.defaultProps = {}

export default React.memo(NewsBar)
