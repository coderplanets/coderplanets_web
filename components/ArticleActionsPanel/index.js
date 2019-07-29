/*
 *
 * ArticleActionsPanel
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'
import { buildLog } from '@utils'

import Informer from '@containers/Informer'
import PinOption from './PinOption'
import RefineOption from './RefineOption'
import EditOption from './EditOption'
import CommunitySetterOption from './CommunitySetterOption'
import DeleteOption from './DeleteOption'

import { Wrapper, Option, OptionIcon, OptionTitle } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleActionsPanel:index')

const ArticleActionsPanel = ({
  data,
  communityRaw,
  thread,
  onUndoPin,
  onPin,
  onSetRefined,
  onUnsetRefined,
  onEdit,
  onInform,
  onDelete,
  onCommunitySet,
}) => (
  <Wrapper>
    <PinOption
      passport={`${communityRaw}->${thread}.pin`}
      data={data}
      thread={thread}
      onPin={onPin}
      onUndoPin={onUndoPin}
    />
    <RefineOption
      passport={`${communityRaw}->${thread}.refinedtag.set`}
      data={data}
      thread={thread}
      onSetRefined={onSetRefined}
      onUnsetRefined={onUnsetRefined}
    />

    <EditOption
      passport="owner"
      ownerId={data.author && data.author.id}
      onEdit={onEdit}
      thread={thread}
    />

    <CommunitySetterOption
      passport={`${thread}.community.set`}
      onCommunitySet={onCommunitySet}
    />

    <Informer>
      <Option onClick={onInform}>
        <OptionIcon src={`${ICON_CMD}/flag.svg`} />
        <OptionTitle>举报该内容</OptionTitle>
      </Option>
    </Informer>

    <DeleteOption
      passport="owner"
      ownerId={data.author && data.author.id}
      onDelete={onDelete}
    />
  </Wrapper>
)

ArticleActionsPanel.propTypes = {
  data: T.shape({
    id: T.string,
    pin: T.bool,
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
  }).isRequired,
  communityRaw: T.string.isRequired,
  thread: T.oneOf(R.values(THREAD)),
  onInform: T.func,
  onDelete: T.func,
  onEdit: T.func,
  onPin: T.func,
  onUndoPin: T.func,
  onSetRefined: T.func,
  onUnsetRefined: T.func,
  onCommunitySet: T.func,
}

ArticleActionsPanel.defaultProps = {
  thread: THREAD.POST,
  onInform: log,
  onDelete: log,
  onEdit: log,
  onPin: log,
  onUndoPin: log,
  onSetRefined: log,
  onUnsetRefined: log,
  onCommunitySet: T.func,
}

export default React.memo(ArticleActionsPanel)
