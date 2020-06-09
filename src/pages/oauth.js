import React from 'react'
import { Provider } from 'mobx-react'

import ThemeWrapper from '@/containers/ThemeWrapper'

import AnalysisService from '@/services/Analysis'
import OauthHinter from '@/components/OauthHinter'

import { useStore } from '@/stores/init'

const OAuthPage = (props) => {
  const store = useStore(props)

  return (
    <Provider store={store}>
      <AnalysisService>
        <ThemeWrapper>
          <OauthHinter />
        </ThemeWrapper>
      </AnalysisService>
    </Provider>
  )
}

export default OAuthPage
