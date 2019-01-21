/*
 *
 * ArticleActionsPanel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import Informer from 'containers/Informer'
import { ICON_CMD } from 'config'

import { makeDebugger, THREAD } from 'utils'
import { Wrapper, Item, ItemIcon, ItemTitle } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ArticleActionsPanel:index')

const ArticleActionsPanel = ({
  data,
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
    {data.pin ? (
      <Item onClick={onUndoPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} reverse />
        <ItemTitle>取消置顶</ItemTitle>
      </Item>
    ) : (
      <Item onClick={onPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} />
        <ItemTitle>置顶显示</ItemTitle>
      </Item>
    )}
    {R.contains('refined', R.pluck('title', data.tags)) ? (
      <Item onClick={onUnsetRefined.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <ItemTitle>取消精华</ItemTitle>
      </Item>
    ) : (
      <Item onClick={onSetRefined.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/diamond_frame.svg`} />
        <ItemTitle>设为精华</ItemTitle>
      </Item>
    )}
    <Item onClick={onEdit.bind(this, thread)}>
      <ItemIcon src={`${ICON_CMD}/edit.svg`} />
      <ItemTitle>编辑</ItemTitle>
    </Item>
    <Informer>
      <Item onClick={onInform}>
        <ItemIcon src={`${ICON_CMD}/flag.svg`} />
        <ItemTitle>举报该内容</ItemTitle>
      </Item>
    </Informer>
    <Item red onClick={onDelete}>
      <ItemIcon src={`${ICON_CMD}/delete.svg`} red />
      <ItemTitle>删除该内容</ItemTitle>
    </Item>
  </Wrapper>
)

ArticleActionsPanel.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    pin: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.string,
        raw: PropTypes.string,
      })
    ),
  }).isRequired,
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
