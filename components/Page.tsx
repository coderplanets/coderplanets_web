import * as React from 'react'

import Link from 'next/link'
/* const Link = require('next/link').default*/
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellowgreen;
  font-size: 50px;
`

interface Props {
  store?: any
  title: any
  linkTo: any
}

@inject('store')
@observer
class Page extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.store.start()
  }

  public componentWillUnmount() {
    this.props.store.stop()
  }

  public render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Page
