/*
 *
 * WikiThread
 *
 */

import React from 'react'

import { ICON_CMD, COMMUNITY_WIKI } from '@config'
import { connectStore, makeDebugger, TYPE } from '@utils'

import EmptyThread from '@components/EmptyThread'
import PublishLabel from '@components/PublishLabel'
import MarkDownRender from '@components/MarkDownRender'
import { ArticleContentLoading } from '@components/LoadingEffects'
import GithubSyncWarning from '@components/GithubSyncWarning'

import Contributors from './Contributors'

import {
  Wrapper,
  LeftPart,
  WikiWrapper,
  LeftPadding,
  RightPart,
  RightPadding,
  PublishBtn,
  MobileBottom,
} from './styles'

import { useInit, syncWarnOnClose } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:WikiThread')

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
      <LeftPadding />
      <LeftPart>
        <WikiWrapper>{renderView(wikiData, curView, communityRaw)}</WikiWrapper>
        <MobileBottom>
          <Contributors
            communityRaw={communityRaw}
            isLogin={isLogin}
            users={wikiData.contributors}
            views={wikiData.views}
            lastSync={wikiData.lastSync}
          />
        </MobileBottom>
      </LeftPart>
      <RightPart>
        <React.Fragment>
          <PublishBtn type="primary">
            <a
              href={`${COMMUNITY_WIKI}/${communityRaw}_wiki.md`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <PublishLabel
                text="参与编辑"
                iconSrc={`${ICON_CMD}/github.svg`}
              />
            </a>
          </PublishBtn>
          <Contributors
            communityRaw={communityRaw}
            isLogin={isLogin}
            users={wikiData.contributors}
            views={wikiData.views}
            lastSync={wikiData.lastSync}
          />
        </React.Fragment>
      </RightPart>
      <RightPadding />
    </Wrapper>
  )
}

export default connectStore(WikiThreadContainer)
