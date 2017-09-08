/*
 *
 * Page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import styled from 'styled-components'

import { FormattedMessage as I18n } from 'react-intl'
import lang from './lang'

import Clock from '../Clock'

const Title = styled.h1`
  color: yellowgreen;
  font-size: 50px;
`

@inject('store')
@observer
export default class Page extends React.Component {
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

        <I18n {...lang.header} />
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

Page.propTypes = {
  /* eslint-disable react/require-default-props */
  store: PropTypes.any,
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
