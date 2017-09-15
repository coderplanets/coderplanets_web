/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

// import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import Body from './Body'
import Button from './Button'
import { HorizontalCenter } from '../../components/BaseStyled'

// const debug = makeDebugger('C:Body')

const ThemeSelector = () => {
  return (
    <HorizontalCenter>
      <Button onClick={logic.changeTheme.bind(this, 'default')}>default</Button>
      <Button onClick={logic.changeTheme.bind(this, 'cyan')}>Cyan</Button>
    </HorizontalCenter>
  )
}

const selector = ({ store }) => ({
  body: store.body, // TODO
})

class ContentContainer extends React.Component {
  componentDidMount() {
    logic.init(this.props.body)
  }

  render() {
    return (
      <div>
        <Body>
          <ThemeSelector />
        </Body>
      </div>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
