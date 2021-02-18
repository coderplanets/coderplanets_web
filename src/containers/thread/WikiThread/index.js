/*
 *
 * WikiThread
 *
 */

import React from 'react'

import { ICON_CMD, COMMUNITY_WIKI } from '@/config'
import { TYPE } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import EmptyThread from '@/components/EmptyThread'
import { PublishButton } from '@/components/Buttons'
import MarkDownRender from '@/components/MarkDownRender'
import { ArticleContentLoading } from '@/components/LoadingEffects'
import GithubSyncWarning from '@/components/GithubSyncWarning'
import Contributors from './Contributors'

import {
  Wrapper,
  LeftPart,
  WikiWrapper,
  RightPart,
  PublisherWrapper,
} from './styles'
import { useInit, syncWarnOnClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WikiThread')

const renderView = (wikiData, type, communityRaw) => {
  switch (type) {
    case TYPE.LOADING:
      return <ArticleContentLoading />

    case TYPE.NOT_FOUND:
      return <EmptyThread community={communityRaw} thread="wiki" />

    case TYPE.RESULT_EMPTY:
      return <EmptyThread community={communityRaw} thread="wiki" />

    default:
      return <MarkDownRender body={wikiData.readme} />
  }
}

const WikiThreadContainer = ({ wikiThread }) => {
  useInit(wikiThread)

  const {
    wikiData,
    curView,
    curCommunity,
    showSyncWarning,
    isLogin,
  } = wikiThread

  const communityRaw = curCommunity.raw

  return (
    <Wrapper>
      <GithubSyncWarning show={showSyncWarning} onClose={syncWarnOnClose} />
      <LeftPart>
        <WikiWrapper>{renderView(wikiData, curView, communityRaw)}</WikiWrapper>
      </LeftPart>
      <RightPart>
        <>
          <PublisherWrapper>
            <PublishButton
              label="参与编辑"
              labelIconSrc={`${ICON_CMD}/github.svg`}
              onPublish={() =>
                alert(`goto  ${COMMUNITY_WIKI}/${communityRaw}_wiki.md`)
              }
            />
          </PublisherWrapper>
          <Contributors
            communityRaw={communityRaw}
            isLogin={isLogin}
            users={wikiData.contributors}
            views={wikiData.views}
            lastSync={wikiData.lastSync}
          />
        </>
      </RightPart>
    </Wrapper>
  )
}

export default pluggedIn(WikiThreadContainer)
