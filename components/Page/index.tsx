import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

import Clock from '../Clock'

const Title = styled.h1`
  color: yellowgreen;
  font-size: 50px;
`

interface Iprops {
  store?: any
  title: any
  linkTo: any
}

@inject('store')
@observer
class Page extends React.Component<Iprops, {}> {
  componentDidMount() {
    this.props.store.start()
  }

  componentWillUnmount() {
    this.props.store.stop()
  }

  render() {
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
