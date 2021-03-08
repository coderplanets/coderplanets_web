//

/*
 *
 * HelpCenterContent
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import LinksCard from '@/components/LinksCard'
// import CollapseMenu from '@/components/CollapseMenu'
import Digest from './Digest'

import { Wrapper, ContentWrapper, CoverWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HelpCenterContent')

const items = [
  {
    id: '0',
    title: '这是一个什么社区？',
  },
  {
    id: '1',
    title: 'Wix Bookings: Tips for Marketing',
  },
  {
    id: '2',
    title: '在哪里可以下载到 iOS 版本的安装包?',
  },
  {
    id: '3',
    title: '后续会有更多的作品吗',
  },
]

const HelpCenterContentContainer = ({
  helpCenterContent: store,
  testId,
  metric,
}) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <Digest metric={metric} />
      <ContentWrapper metric={metric}>
        <CoverWrapper>
          <LinksCard title="常见问题" items={items} />
          <LinksCard title="常见问题" items={items} />
          <LinksCard title="常见问题" items={items} />
          <LinksCard title="常见问题" items={items} />
          {/* <CollapseMenu /> */}
        </CoverWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

HelpCenterContentContainer.propTypes = {
  helpCenterContent: T.any.isRequired,
  testId: T.string,
  metric: T.oneOf(values(METRIC)),
}

HelpCenterContentContainer.defaultProps = {
  testId: 'help-center-content',
  metric: METRIC.HELP_CENTER,
}

export default pluggedIn(HelpCenterContentContainer)
