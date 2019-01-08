/*
 *
 * ArticleBodyHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import { Popover, ArticleActionsPanel } from '../../components'

import {
  Wrapper,
  MoreWrapper,
  MoreIcon,
  LinkFrom,
  RefinedLabel,
  LinkSource,
  RefinedIcon,
  RefinedText,
} from './styles'

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
    const { data, thread } = this.props
    const isRefined = R.contains('refined', R.pluck('title', data.tags))

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
        {data.linkAddr ? (
          <LinkFrom
            href={data.linkAddr}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>转载自:&nbsp;</div>
            <LinkSource>{data.linkAddr}</LinkSource>
          </LinkFrom>
        ) : null}
        {isRefined ? (
          <RefinedLabel>
            <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
            <RefinedText>精 华</RefinedText>
          </RefinedLabel>
        ) : (
          <div />
        )}
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
}

ArticleBodyHeaderContainer.defaultProps = {
  thread: THREAD.POST,
}

export default inject(storePlug('articleBodyHeader'))(
  observer(ArticleBodyHeaderContainer)
)
