import React from 'react'
import { Provider } from 'mobx-react'

import GAWraper from '../components/GAWraper'
import initRootStore from '../stores/init'
// import ThemeWrapper from '../containers/ThemeWrapper'

// import { ErrorPage } from '../components'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    /* eslint-disable */
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    /* eslint-enable */
    return { statusCode }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ langSetup: '' })
  }

  render() {
    //  const { statusCode } = this.props

    /*
       <p>
       {statusCode
       ? `An error ${statusCode} occurred on server`
       : `n error ${statusCode} occurred on client`}
       </p>
     */

    return (
      <Provider store={this.store}>
        <GAWraper>
          <h3>Errored</h3>
          {/*
              <ThemeWrapper>
              <ErrorPage errorCode={statusCode} />
              </ThemeWrapper>
            */}
        </GAWraper>
      </Provider>
    )
  }
}
