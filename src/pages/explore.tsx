/*
   this page is for /explore
 */
import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  queryStringToJSON,
  ssrParseURL,
  ssrRescue,
  refreshIfneed,
  exploreSEO,
  ssrError,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ExploreContent from '@/containers/content/ExploreContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const { subPath } = ssrParseURL(context.req)
  const category = subPath !== '' ? subPath : 'pl'

  const filter = {
    ...queryStringToJSON(context.req.url, {
      noPagiInfo: false,
      pagi: 'number',
    }),
  }

  const sessionState = gqClient.request(P.sessionState)
  const pagedCommunities = gqClient.request(P.pagedCommunities, {
    filter: { ...filter, category },
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
    category,
    ...(await sessionState),
    ...(await pagedCategories),
    ...(await pagedCommunities),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
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
      <GlobalLayout metric={METRIC.EXPLORE} seoConfig={seoConfig}>
        <ExploreContent />
      </GlobalLayout>
    </Provider>
  )
}

export default ExplorePage
