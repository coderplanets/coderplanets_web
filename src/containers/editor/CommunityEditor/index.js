/*
 *
 * DiscoveryContent
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Banner from './Banner'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:DiscoveryContent')

const CommunityEditorContainer = ({ communityEditor: store, metric }) => {
  useInit(store)
  const { step, selectTypeStatus, setupDomainStatus, setupInfoStatus } = store

  return (
    <Wrapper metric={metric}>
      <Banner
        step={step}
        selectTypeStatus={selectTypeStatus}
        setupDomainStatus={setupDomainStatus}
        setupInfoStatus={setupInfoStatus}
      />
      <InnerWrapper metric={metric}>
        <ContentWrapper>
          <Content
            step={step}
            selectTypeStatus={selectTypeStatus}
            setupDomainStatus={setupDomainStatus}
            setupInfoStatus={setupInfoStatus}
          />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

CommunityEditorContainer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default pluggedIn(CommunityEditorContainer)
