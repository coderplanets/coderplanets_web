/*
 *
 * ArticleBodyHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { connectStore, makelogger, THREAD } from '@utils'

import Labeler from '@containers/Labeler'
import CommunitySetter from '@containers/CommunitySetter'
import Popover from '@components/Popover'
import ArticleActionsPanel from '@components/ArticleActionsPanel'

import Linker from './Linker'
import RefinedLabel from './RefinedLabel'

import { Wrapper, MoreWrapper, MoreIcon } from './styles'

import {
  useInit,
  onEdit,
  onPin,
  onUndoPin,
  onSetRefined,
  onUnsetRefined,
  onInform,
  onDelete,
  onCommunitySet,
  onTagSelect,
  onTagUnselect,
} from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:ArticleBodyHeader')

const ArticleBodyHeaderContainer = ({
  articleBodyHeader,
  communityRaw,
  thread,
  data,
  middle,
}) => {
  useInit(articleBodyHeader)

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
              onEdit={onEdit}
              onPin={onPin}
              onUndoPin={onUndoPin}
              onSetRefined={onSetRefined}
              onUnsetRefined={onUnsetRefined}
              onInform={onInform}
              onDelete={onDelete}
              onCommunitySet={onCommunitySet}
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
          onTagSelect={onTagSelect}
          onTagUnselect={onTagUnselect}
          selected={tagTitleList}
        />
      )}
      <RefinedLabel tags={data.tags} />
    </Wrapper>
  )
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

export default connectStore(ArticleBodyHeaderContainer)
