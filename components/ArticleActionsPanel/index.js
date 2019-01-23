/*
 *
 * ArticleActionsPanel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from 'config'
import { makeDebugger, THREAD } from 'utils'

import Informer from 'containers/Informer'
import PinOption from './PinOption'
import RefineOption from './RefineOption'
import EditOption from './EditOption'

import { Wrapper, Option, OptionIcon, OptionTitle } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ArticleActionsPanel:index')

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
      ownerId={data.author.id}
      onEdit={onEdit}
      thread={thread}
    />

    <Informer>
      <Option onClick={onInform}>
        <OptionIcon src={`${ICON_CMD}/flag.svg`} />
        <OptionTitle>举报该内容</OptionTitle>
      </Option>
    </Informer>
    <Option red onClick={onDelete}>
      <OptionIcon src={`${ICON_CMD}/delete.svg`} red />
      <OptionTitle>删除该内容</OptionTitle>
    </Option>
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
}

ArticleActionsPanel.defaultProps = {
  thread: THREAD.POST,
  onInform: debug,
  onDelete: debug,
  onEdit: debug,
  onPin: debug,
  onUndoPin: debug,
  onSetRefined: debug,
  onUnsetRefined: debug,
}

export default React.memo(ArticleActionsPanel)
