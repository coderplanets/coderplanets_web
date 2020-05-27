/*
 *
 * ArticleBodyHeader
 *
 */

import React from 'react'
import T from 'prop-types'
import { pluck } from 'ramda'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Labeler from '@/containers/Labeler'
import CommunitySetter from '@/containers/CommunitySetter'
import Tooltip from '@/components/Tooltip'
import ArticleActionsPanel from '@/components/ArticleActionsPanel'

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
const log = buildLog('C:ArticleBodyHeader')

const ArticleBodyHeaderContainer = ({
  articleBodyHeader: store,
  communityRaw,
  thread,
  data,
  middle,
}) => {
  useInit(store)

  const tagTitleList = pluck('title', data.tags)

  return (
    <Wrapper>
      <MoreWrapper>
        <Tooltip
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
          placement="bottom-start"
        >
          <div>
            <MoreIcon src={`${ICON_CMD}/article_more.svg`} />
          </div>
        </Tooltip>
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
  articleBodyHeader: T.any.isRequired,
  communityRaw: T.string.isRequired,
  thread: T.string,
  data: T.shape({
    id: T.string,
    author: T.shape({
      id: T.string,
    }),
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        color: T.string,
        raw: T.string,
      })
    ),
    linkAddr: T.string,
  }).isRequired,
  middle: T.oneOf(['linker', 'labeler']),
}

ArticleBodyHeaderContainer.defaultProps = {
  thread: THREAD.POST,
  middle: 'linker',
}

export default connectStore(ArticleBodyHeaderContainer)
