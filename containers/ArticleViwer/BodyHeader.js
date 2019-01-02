import React from 'react'
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
} from './styles/body_header'

import * as logic from './logic'

const BodyHeader = ({ data, thread }) => {
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

export default BodyHeader
