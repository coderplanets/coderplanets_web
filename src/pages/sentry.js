import React from 'react'
import Link from 'next/link'

/* eslint-disable */
class Sentry extends React.Component {
  static getInitialProps({ query }) {
    if (query.raiseError) {
      throw new Error('Error in getInitialProps')
    }
  }

  state = {
    raiseError: false,
  }

  componentDidUpdate() {
    const { raiseErrorInUpdate } = this.state
    if (raiseErrorInUpdate) {
      throw new Error('Error in componentDidUpdate')
    }
  }

  raiseErrorInUpdate = () => this.setState({ raiseErrorInUpdate: '1' })

  raiseErrorInRender = () => this.setState({ raiseErrorInRender: '1' })

  render() {
    const { raiseErrorInRender } = this.state

    if (raiseErrorInRender) {
      throw new Error('Error in render')
    }

    return (
      <div>
        <h2>Sentry page</h2>
        <ul>
          <li>
            <a href="#" onClick={this.raiseErrorInRender}>
              Raise the error in render
            </a>
          </li>
          <li>
            <a href="#" onClick={this.raiseErrorInUpdate}>
              Raise the error in componentDidUpdate
            </a>
          </li>
          <li>
            <Link href={{ pathname: '/', query: { raiseError: '1' } }}>
              <a>Raise error in getInitialProps of client-loaded page</a>
            </Link>
          </li>
          <li>
            <a href="/?raiseError=1">
              Raise error in getInitialProps of server-loaded page
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sentry
