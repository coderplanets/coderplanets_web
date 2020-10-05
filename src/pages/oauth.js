import React from 'react'
import { Provider } from 'mobx-react'

import ThemePalette from '@/containers/layout/ThemePalette'

import AnalysisService from '@/services/Analysis'
import OauthHinter from '@/components/OauthHinter'

import { useStore } from '@/stores/init'

const OAuthPage = (props) => {
  const store = useStore(props)

  return (
    <Provider store={store}>
      <AnalysisService>
        <ThemePalette>
          <OauthHinter />
        </ThemePalette>
      </AnalysisService>
    </Provider>
  )
}

export default OAuthPage
