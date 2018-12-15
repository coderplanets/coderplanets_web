/*
 *
 * WikiThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import {
  PublishLabel,
  MarkDownRender,
  EmptyThread,
  ArticleContentLoading,
} from '../../components'

import {
  Wrapper,
  LeftPart,
  WikiWrapper,
  LeftPadding,
  RightPart,
  RightPadding,
  PublishBtn,
} from './styles'

import Contributors from './Contributors'

import { makeDebugger, storePlug, TYPE } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:WikiThread')
/* eslint-enable no-unused-vars */

const renderView = (wikiData, type, communityRaw) => {
  switch (type) {
    case TYPE.LOADING: {
      return <ArticleContentLoading />
    }
    case TYPE.NOT_FOUND: {
      return <EmptyThread community={communityRaw} thread="wiki" />
    }
    default: {
      return <MarkDownRender body={wikiData.readme} />
    }
  }
}

class WikiThreadContainer extends React.Component {
  componentDidMount() {
    const { wikiThread } = this.props
    logic.init(wikiThread)
  }

  render() {
    const { wikiThread } = this.props
    const { wikiData, curView, curCommunity } = wikiThread
    const communityRaw = curCommunity.raw

    debug('wikiData: ', wikiData)

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <WikiWrapper>
            {renderView(wikiData, curView, communityRaw)}
          </WikiWrapper>
        </LeftPart>
        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={debug}>
              <PublishLabel
                text="参与编辑"
                iconSrc={`${ICON_CMD}/github.svg`}
              />
            </PublishBtn>
            <Contributors
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
