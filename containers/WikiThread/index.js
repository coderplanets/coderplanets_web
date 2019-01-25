/*
 *
 * WikiThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD, COMMUNITY_WIKI } from 'config'
import { makeDebugger, storePlug, TYPE } from 'utils'

import EmptyThread from 'components/EmptyThread'

import PublishLabel from 'components/PublishLabel'
import MarkDownRender from 'components/MarkDownRender'
import { ArticleContentLoading } from 'components/LoadingEffects'
import GithubSyncWarning from 'components/GithubSyncWarning'

import Contributors from './Contributors'

import {
  Wrapper,
  LeftPart,
  WikiWrapper,
  LeftPadding,
  RightPart,
  RightPadding,
  PublishBtn,
} from './styles'

import * as logic from './logic'

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

class WikiThreadContainer extends React.Component {
  componentDidMount() {
    const { wikiThread } = this.props
    logic.init(wikiThread)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { wikiThread } = this.props
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
        <GithubSyncWarning
          show={showSyncWarning}
          onClose={logic.syncWarnOnClose}
        />
        <LeftPadding />
        <LeftPart>
          <WikiWrapper>
            {renderView(wikiData, curView, communityRaw)}
          </WikiWrapper>
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
}

export default inject(storePlug('wikiThread'))(observer(WikiThreadContainer))
