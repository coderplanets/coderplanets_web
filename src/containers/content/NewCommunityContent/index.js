/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Banner from './Banner'
import Content from './Content'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const NewCommunityContentContainer = ({ newCommunityContent }) => {
  useInit(newCommunityContent)
  const { step, selectTypeStatus, setupDomainStatus } = newCommunityContent

  return (
    <Wrapper>
      <Banner
        step={step}
        selectTypeStatus={selectTypeStatus}
        setupDomainStatus={setupDomainStatus}
      />
      <ContentWrapper>
        <Content
          step={step}
          selectTypeStatus={selectTypeStatus}
          setupDomainStatus={setupDomainStatus}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(NewCommunityContentContainer)
