/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { THREAD, TOPIC } from '@constant'
import { buildLog, connectStore, sortByColor, Trans } from '@utils'

import TagOptions from './TagOptions'

import {
  Wrapper,
  TagItem,
  TagDot,
  TagTitle,
  AllTagIcon,
  TagOptionsWrapper,
} from './styles'

import { useInit, onTagSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:TagsBar')

const TagsBarContainer = ({ tagsBar, thread, topic, active, onSelect }) => {
  useInit(tagsBar, thread, topic, active)

  const { tagsData, activeTagData } = tagsBar

  const sortedTags = sortByColor(tagsData)
  const emptytag = { id: '', title: '', color: '' }

  return (
    <Wrapper>
      {activeTagData.title && (
        <TagItem onClick={onTagSelect(emptytag, onSelect)}>
          <AllTagIcon src={`${ICON_CMD}/all_tags.svg`} />
          <TagTitle>全部</TagTitle>
        </TagItem>
      )}

      {sortedTags.map(({ id, color, title }) => (
        <TagItem key={id}>
          <TagDot color={color} active={activeTagData.title} title={title} />
          <TagTitle
            active={activeTagData.title}
            title={title}
            color={color}
            onClick={onTagSelect({ id, title, color }, onSelect)}
          >
            {Trans(title)}
          </TagTitle>
          <TagOptionsWrapper>
            <TagOptions
              onInclude={onTagSelect({ id, title, color }, onSelect)}
            />
          </TagOptionsWrapper>
        </TagItem>
      ))}
    </Wrapper>
  )
}

TagsBarContainer.propTypes = {
  tagsBar: T.object.isRequired,
  thread: T.string,
  topic: T.string,
  onSelect: T.func.isRequired,
  active: T.shape({
    id: T.string,
    title: T.string,
    color: T.string,
  }),
}

TagsBarContainer.defaultProps = {
  thread: THREAD.POST,
  topic: TOPIC.POST,
  active: {},
}

export default connectStore(TagsBarContainer)
