import React from 'react'
import { Provider } from 'mobx-react'

import GAWraper from '../components/GAWraper'
import initRootStore from '../stores/init'
import ThemeWrapper from '../containers/ThemeWrapper'

import { OauthHinter } from '../components'

export default class Index extends React.Component {
  static getInitialProps() {
    return {}
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ langSetup: '' })
  }

  //  <Doraemon />

  render() {
    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            <OauthHinter />
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
