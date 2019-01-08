/*
 *
 * ArticleBodyHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
import { Popover, ArticleActionsPanel } from '../../components'

import Labeler from '../Labeler'

import Linker from './Linker'
import RefinedLabel from './RefinedLabel'

import { Wrapper, MoreWrapper, MoreIcon } from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleBodyHeader')
/* eslint-enable no-unused-vars */

class ArticleBodyHeaderContainer extends React.Component {
  componentDidMount() {
    const { articleBodyHeader } = this.props
    logic.init(articleBodyHeader)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { data, thread, middle } = this.props

    return (
      <Wrapper>
        <MoreWrapper>
          <Popover
            content={
              <ArticleActionsPanel
                thread={thread}
                entry={data}
                onEdit={logic.onEdit}
                onPin={logic.onPin}
                onUndoPin={logic.onUndoPin}
                onInform={logic.onInform}
                onDelete={logic.onDelete}
              />
            }
            placement="bottomLeft"
            trigger="click"
          >
            <div>
              <MoreIcon src={`${ICON_CMD}/article_more.svg`} />
            </div>
          </Popover>
        </MoreWrapper>

        {middle === 'linker' ? <Linker addr={data.linkAddr} /> : null}
        {middle === 'labeler' ? <Labeler /> : null}
        <RefinedLabel tags={data.tags} />
      </Wrapper>
    )
  }
}

ArticleBodyHeaderContainer.propTypes = {
  articleBodyHeader: PropTypes.any.isRequired,
  thread: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
    tags: PropTypes.object,
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
