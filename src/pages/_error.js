import React from 'react'
import { Provider } from 'mobx-react'

import AnalysisService from '@/services/Analysis'
import ThemeWrapper from '@/containers/ThemeWrapper'
import ErrorPage from '@/components/ErrorPage'

import { useStore } from '@/stores/init'

import { Wrapper } from '@/containers/GlobalLayout/styles'

const DefaultErrorPage = props => {
  const store = useStore(props)

  return (
    <Provider store={store}>
      <AnalysisService>
        <ThemeWrapper>
          <Wrapper>
            <ErrorPage />
          </Wrapper>
        </ThemeWrapper>
      </AnalysisService>
    </Provider>
  )
}

DefaultErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['general'],
})

export default DefaultErrorPage
