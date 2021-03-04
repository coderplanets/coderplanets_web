/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { THREAD, TOPIC } from '@/constant'
import { buildLog, pluggedIn, sortByColor } from '@/utils'

import GobackTag from './GobackTag'
import TagItem from './TagItem'

import { Wrapper } from '../styles/desktop_view'

import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:TagsBar')

const TagsBarContainer = ({
  tagsBar: store,
  thread,
  topic,
  active,
  onSelect,
}) => {
  useInit(store, thread, topic, active)
  const { tagsData, activeTagData } = store
  const sortedTags = sortByColor(tagsData)

  return (
    <Wrapper>
      {activeTagData.title && <GobackTag onSelect={onSelect} />}

      {sortedTags.map((tag) => (
        <TagItem
          key={tag.id}
          tag={tag}
          active={activeTagData.title === tag.title}
          activeId={activeTagData.id}
          onSelect={onSelect}
        />
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

export default pluggedIn(TagsBarContainer)
