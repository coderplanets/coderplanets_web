import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../../stores'
import { GAWraper } from '../../components'

import {
  gqRequest,
  queryStringToJSON,
  parseMainPath,
  extractThreadFromPath,
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

import BannerSchema from '../../containers/Banner/schema'
import JobsThreadSchema from '../../containers/JobsThread/schema'

import Footer from '../../components/Footer'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const community = parseMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(props.asPath), community }

  const pagedJobs = gqRequest(JobsThreadSchema.pagedJobsRaw, { filter })
  const partialTags = gqRequest(JobsThreadSchema.partialTagsRaw, {
    thread,
    community,
  })
  const curCommunity = gqRequest(BannerSchema.communityRaw, { raw: community })

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

    const { pagedJobs, partialTags, community } = await fetchData(props)
    /* eslint-enable no-undef */

    return {
      langSetup: {},
      curCommunity: { community },
      jobsThread: {
        pagedJobs,
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
