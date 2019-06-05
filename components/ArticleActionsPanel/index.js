/*
 *
 * ArticleActionsPanel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { makelogger, THREAD } from '@utils'

import Informer from '@containers/Informer'
import PinOption from './PinOption'
import RefineOption from './RefineOption'
import EditOption from './EditOption'
import CommunitySetterOption from './CommunitySetterOption'
import DeleteOption from './DeleteOption'

import { Wrapper, Option, OptionIcon, OptionTitle } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:ArticleActionsPanel:index')

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
  data: PropTypes.shape({
    id: PropTypes.string,
    pin: PropTypes.bool,
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
  }).isRequired,
  communityRaw: PropTypes.string.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  onInform: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onPin: PropTypes.func,
  onUndoPin: PropTypes.func,
  onSetRefined: PropTypes.func,
  onUnsetRefined: PropTypes.func,
  onCommunitySet: PropTypes.func,
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
  onCommunitySet: PropTypes.func,
}

export default React.memo(ArticleActionsPanel)
