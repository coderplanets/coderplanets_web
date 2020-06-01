/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Banner from './Banner'
import Content from './Content'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const NewCommunityContentContainer = ({ newCommunityContent: store }) => {
  useInit(store)
  const { step, selectTypeStatus, setupDomainStatus, setupInfoStatus } = store

  return (
    <Wrapper>
      <Banner
        step={step}
        selectTypeStatus={selectTypeStatus}
        setupDomainStatus={setupDomainStatus}
        setupInfoStatus={setupInfoStatus}
      />
      <ContentWrapper>
        <Content
          step={step}
          selectTypeStatus={selectTypeStatus}
          setupDomainStatus={setupDomainStatus}
          setupInfoStatus={setupInfoStatus}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

NewCommunityContentContainer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default connectStore(NewCommunityContentContainer)
