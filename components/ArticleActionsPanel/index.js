/*
 *
 * ArticleActionsPanel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import Informer from '../../containers/Informer'

import { Wrapper, Item, ItemIcon, ItemTitle } from './styles'

import { makeDebugger, THREAD } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ArticleActionsPanel:index')
/* eslint-enable no-unused-vars */

const ArticleActionsPanel = ({
  entry,
  thread,
  onUndoPin,
  onPin,
  onEdit,
  onInform,
}) => (
  <Wrapper>
    {entry.pin ? (
      <Item onClick={onUndoPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} reverse />
        <ItemTitle>取消置顶</ItemTitle>
      </Item>
    ) : (
      <Item onClick={onPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} />
        <ItemTitle>置顶</ItemTitle>
      </Item>
    )}
    <Item onClick={onEdit.bind(this, thread)}>
      <ItemIcon src={`${ICON_CMD}/edit.svg`} />
      <ItemTitle>编辑</ItemTitle>
    </Item>
    {/*
      <Item>
      <ItemIcon src={`${ICON_CMD}/diamond.svg`} />
      <ItemTitle>置为精华</ItemTitle>
      </Item>
    */}
    <Informer>
      <Item onClick={onInform}>
        <ItemIcon src={`${ICON_CMD}/flag.svg`} />
        <ItemTitle>举报该内容</ItemTitle>
      </Item>
    </Informer>
    <Item red>
      <ItemIcon src={`${ICON_CMD}/delete.svg`} red />
      <ItemTitle>删除该内容</ItemTitle>
    </Item>
  </Wrapper>
)

ArticleActionsPanel.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.string,
    pin: PropTypes.bool,
  }).isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  onInform: PropTypes.func,
  onEdit: PropTypes.func,
  onPin: PropTypes.func,
  onUndoPin: PropTypes.func,
}

ArticleActionsPanel.defaultProps = {
  thread: THREAD.POST,
  onInform: debug,
  onEdit: debug,
  onPin: debug,
  onUndoPin: debug,
}

export default React.memo(ArticleActionsPanel)
