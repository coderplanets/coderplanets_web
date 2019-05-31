import React from 'react'
import { Provider } from 'mobx-react'

import ThemeWrapper from '@containers/ThemeWrapper'
import GAWraper from '@components/GAWraper'
import ErrorPage from '@components/ErrorPage'

import initRootStore from '@stores/init'

export default class TheErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    /* eslint-disable */
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    /* eslint-enable */
    return { statusCode }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ langSetup: {} })
  }

  render() {
    const { statusCode, page, target } = this.props

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            <ErrorPage errorCode={statusCode} page={page} target={target} />
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
