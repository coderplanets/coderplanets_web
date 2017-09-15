/*
*
* Content
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

// import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import Content from './Content'
import Button from './Button'
import { HorizontalCenter } from '../../components/BaseStyled'

// const debug = makeDebugger('C:Content')

const ThemeSelector = () => {
  return (
    <HorizontalCenter>
      <Button onClick={logic.changeTheme.bind(this, 'default')}>default</Button>
      <Button onClick={logic.changeTheme.bind(this, 'cyan')}>Cyan</Button>
    </HorizontalCenter>
  )
}

const selector = ({ store }) => ({
  theme: store.sidebar, // TODO
})

class ContentContainer extends React.Component {
  componentDidMount() {
    logic.init(this.props.theme)
  }

  render() {
    return (
      <div>
        <Content>
          <ThemeSelector />
          hello?
        </Content>
      </div>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
