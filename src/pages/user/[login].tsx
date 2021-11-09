/*
   this page is for /user/xxx
 */
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'
import {
  ssrGetParam,
  ssrFetchPrepare,
  ssrBaseStates,
  ssrError,
  refreshIfneed,
  userSEO,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import UserContent from '@/containers/content/UserContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const login = ssrGetParam(context, 'login')

  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  const sessionState = gqClient.request(P.sessionState)
  const user = gqClient.request(P.user, { login, userHasLogin })
  const filter = { page: 1, size: 10 }
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    login,
    filter,
  })

  return {
    ...(await sessionState),
    ...(await user),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  // const query = queryStringToJSON(context.req.url)

  let resp
  try {
    resp = await fetchData(context)
    const { user, sessionState } = resp
    refreshIfneed(sessionState, `/user/${user.login}`, context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { user, pagedWorks, subscribedCommunities } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    // route: { mainPath: ROUTE.USER, subPath: user.id, query },
    // userContent: { activeThread: query.tab || USER_THREAD.PROFILE },
    viewing: { user },
    userProfile: { subscribedCommunities },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const UserPage = (props) => {
  const store = useStore(props)

  const { viewing } = props
  const { user } = viewing

  const seoConfig = userSEO(user)

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.USER}
        seoConfig={seoConfig}
        noSidebar={!!user.login}
      >
        <UserContent />
      </GlobalLayout>
    </Provider>
  )
}

export default UserPage
