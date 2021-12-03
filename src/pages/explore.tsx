/*
   this page is for /explore
 */
import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'

import { PAGE_SIZE } from '@/config'
import {
  ssrBaseStates,
  ssrFetchPrepare,
  queryStringToJSON,
  ssrParseURL,
  refreshIfneed,
  exploreSEO,
  ssrError,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ExploreContent from '@/containers/content/ExploreContent'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  const filter = {
    page: 1,
    size: PAGE_SIZE.M,
  }

  const sessionState = gqClient.request(P.sessionState)
  const pagedCommunities = gqClient.request(P.pagedCommunities, {
    filter,
    userHasLogin,
  })
  const pagedCategories = gqClient.request(P.pagedCategories, { filter })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await pagedCategories),
    ...(await pagedCommunities),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp

    refreshIfneed(sessionState, '/explore', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { pagedCategories, pagedCommunities } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    exploreContent: {
      pagedCommunities,
      pagedCategories,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const ExplorePage = (props) => {
  const store = useStore(props)
  const seoConfig = exploreSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.EXPLORE} seoConfig={seoConfig} noSidebar>
        <ExploreContent />
      </GlobalLayout>
    </Provider>
  )
}

export default ExplorePage
