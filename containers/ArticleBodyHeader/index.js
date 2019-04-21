/*
 *
 * ArticleBodyHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import { ICON_CMD } from 'config'
import { makeDebugger, storePlug, THREAD } from 'utils'

import Labeler from 'containers/Labeler'
import CommunitySetter from 'containers/CommunitySetter'
import Popover from 'components/Popover'
import ArticleActionsPanel from 'components/ArticleActionsPanel'

import Linker from './Linker'
import RefinedLabel from './RefinedLabel'

import { Wrapper, MoreWrapper, MoreIcon } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ArticleBodyHeader')

class ArticleBodyHeaderContainer extends React.Component {
  componentDidMount() {
    const { articleBodyHeader } = this.props
    logic.init(articleBodyHeader)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { communityRaw, thread, data, middle } = this.props
    const tagTitleList = R.pluck('title', data.tags)

    return (
      <Wrapper>
        <MoreWrapper>
          <Popover
            content={
              <ArticleActionsPanel
                communityRaw={communityRaw}
                thread={thread}
                data={data}
                onEdit={logic.onEdit}
                onPin={logic.onPin}
                onUndoPin={logic.onUndoPin}
                onSetRefined={logic.onSetRefined}
                onUnsetRefined={logic.onUnsetRefined}
                onInform={logic.onInform}
                onDelete={logic.onDelete}
                onCommunitySet={logic.onCommunitySet}
              />
            }
            placement="bottomLeft"
            trigger="hover"
          >
            <div>
              <MoreIcon src={`${ICON_CMD}/article_more.svg`} />
            </div>
          </Popover>
        </MoreWrapper>

        <CommunitySetter />

        {middle === 'linker' && <Linker addr={data.linkAddr} />}
        {middle === 'labeler' && (
          <Labeler
            passport={`owner;${communityRaw}->${thread}.tag.set`}
            ownerId={data.author && data.author.id}
            fallbackProps="readOnly"
            onTagSelect={logic.onTagSelect}
            onTagUnselect={logic.onTagUnselect}
            selected={tagTitleList}
          />
        )}
        <RefinedLabel tags={data.tags} />
      </Wrapper>
    )
  }
}

ArticleBodyHeaderContainer.propTypes = {
  articleBodyHeader: PropTypes.any.isRequired,
  communityRaw: PropTypes.string.isRequired,
  thread: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.string,
        raw: PropTypes.string,
      })
    ),
    linkAddr: PropTypes.string,
  }).isRequired,
  middle: PropTypes.oneOf(['linker', 'labeler']),
}

ArticleBodyHeaderContainer.defaultProps = {
  thread: THREAD.POST,
  middle: 'linker',
}

export default inject(storePlug('articleBodyHeader'))(
  observer(ArticleBodyHeaderContainer)
)
