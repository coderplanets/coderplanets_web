import React from 'react'
import { Provider } from 'mobx-react'
import { contains } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'
import { buildLog, parseURL, isServerSide } from '@/utils'

import GlobalLayout from '@/containers/GlobalLayout'
import CommunityBanner from '@/containers/banner/CommunityBanner'
import CommunityContent from '@/containers/content/CommunityContent'
// import Banner from '@/containers/Banner'
// import Content from '@/containers/Content'

import initRootStore from '@/stores/init'
// import { AnalysisService, ErrorPage } from '@/components'

/* eslint-disable-next-line */
const log = buildLog('page:community')

/*
   NOTE: in dev mode, this index page is always be required, even the server
   is not routing to this page, it's very confused, help needed

   currently it's just the community page with no data fetch, works fine though
 */
export default class PageCommunity extends React.Component {
  static async getInitialProps(props) {
    if (!isServerSide) return {}

    const { communityPath, threadPath } = parseURL(props)

    const hideSidebar =
      contains(communityPath, [ROUTE.USER]) ||
      contains(threadPath, [ROUTE.POST, ROUTE.REPO, ROUTE.VIDEO, ROUTE.JOB])

    return {
      hideSidebar,
    }
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore()
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    const { statusCode, target, hideSidebar } = this.props

    const seoConfig = {
      url: `${SITE_URL}`,
      title: 'coderplanets 社区',
      description: '最性感的开发者社区',
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          noSidebar={hideSidebar}
          page={ROUTE.COMMUNITY}
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
        >
          <CommunityBanner />
          <CommunityContent />
          {/* <Banner />
          <Content /> */}
        </GlobalLayout>
      </Provider>
    )
  }
}
