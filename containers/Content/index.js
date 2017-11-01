/*
*
* Content
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils/functions'
import { theme } from '../../utils/themes'

import * as logic from './logic'

const debug = makeDebugger('C:Content')

const Tmp = styled.div`
  margin: 30px;
  width: 95%;
  height: 70%;
  background: ${theme('content.bg')};
  border-radius: 10px;
  padding: 30px;
`

class ContentContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.content)
  }

  render() {
    return (
      <Tmp>
        <br />
        Content container!
      </Tmp>
    )
  }
}

export default inject(storeSelector('content'))(observer(ContentContainer))
