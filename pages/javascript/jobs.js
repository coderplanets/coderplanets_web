import React from 'react'
import { Provider } from 'mobx-react'
import { request } from 'graphql-request'

import { GRAPHQL_ENDPOINT } from '../../config'

import initRootStore from '../../stores'
import { GAWraper } from '../../components'

import { /* Global */ queryStringToJSON } from '../../utils'

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

import JobsThreadSchema from '../../containers/JobsThread/schema'

import Footer from '../../components/Footer'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

// TODO: should be community/posts
export default class Jobs extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}
    /* const isServer = !!req */
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-undef */
    console.log('SSR ## community (in javascript)jobs ##: ', asPath)

    const jobsQuery = request(GRAPHQL_ENDPOINT, JobsThreadSchema.pagedJobsRaw, {
      filter: queryStringToJSON(asPath),
    })
    const tagsQuery = request(
      GRAPHQL_ENDPOINT,
      JobsThreadSchema.partialTagsRaw,
      {
        thread: 'JOB',
        communityId: '123',
      }
    )

    const data = [await jobsQuery, await tagsQuery]
    /* eslint-enable no-undef */

    return {
      langSetup: {},
      jobsThread: {
        pagedJobs: data[0].pagedJobs,
        tags: data[1].partialTags,
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
