import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../../stores/init'
import { GAWraper } from '../../components'

import {
  makeGQClient,
  getMainPath,
  getSubPath,
  queryStringToJSON,
  extractThreadFromPath,
  subPath2Thread,
  TYPE,
} from '../../utils'

import {
  ThemeWrapper,
  MultiLanguage,
  Sidebar,
  Preview,
  Doraemon,
  Route,
  BodyLayout,
  Header,
  Banner,
  Content,
} from '../../containers'

import CommunityBannerSchema from '../../containers/CommunityBanner/schema'
import JobsThreadSchema from '../../containers/JobsThread/schema'

import Footer from '../../components/Footer'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const { request } = makeGQClient()
  const { asPath } = props
  // schema
  const { communityRaw } = CommunityBannerSchema
  const { pagedJobsRaw, partialTagsRaw } = JobsThreadSchema

  const community = getMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(asPath), community }

  // data
  const curCommunity = request(communityRaw, { raw: community })
  const pagedJobs = request(pagedJobsRaw, { filter })
  const partialTags = request(partialTagsRaw, {
    thread,
    community,
  })

  return {
    ...(await pagedJobs),
    ...(await partialTags),
    ...(await curCommunity),
  }
}

export default class Jobs extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}
    /* const isServer = !!req */
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-undef */
    console.log('SSR ## community (in javascript)jobs ##: ', asPath)
    const thread = getSubPath(props)

    const { pagedJobs, partialTags, community } = await fetchData(props)
    /* eslint-enable no-undef */
    const curView =
      pagedJobs.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

    return {
      langSetup: {},
      /* curCommunity: { community, activeThread: subPath2Thread(thread) }, */
      viewing: { community, activeThread: subPath2Thread(thread) },
      route: { mainPath: community.raw, subPath: thread },
      jobsThread: {
        pagedJobs,
        curView,
        tags: partialTags,
      },
    }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ ...props })
  }

  render() {
    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            <Route />
            <MultiLanguage>
              <Sidebar />
              <Preview />
              <Doraemon />
              <BodyLayout>
                <Header />
                <Banner />
                <Content />
                <Footer />
              </BodyLayout>
            </MultiLanguage>
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
