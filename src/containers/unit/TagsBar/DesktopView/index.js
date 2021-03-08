/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'
import { keys } from 'ramda'

import { THREAD, TOPIC } from '@/constant'
import { buildLog, pluggedIn } from '@/utils'

import GobackTag from './GobackTag'
import Folder from './Folder'

import { Wrapper } from '../styles/desktop_view'

import { useInit, onTagSelect } from '../logic'

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
  const { groupedTags, tagsData, activeTagData } = store
  const groupsKeys = keys(groupedTags)

  return (
    <Wrapper>
      {activeTagData.title && (
        <GobackTag
          onSelect={(tag) => {
            onTagSelect(tag)
            onSelect(tag)
          }}
        />
      )}
      {groupsKeys.map((groupKey) => (
        <Folder
          key={groupKey}
          title={groupKey}
          groupTags={groupedTags[groupKey]}
          allTags={tagsData}
          activeTag={activeTagData}
          onSelect={(tag) => {
            onTagSelect(tag)
            onSelect(tag)
          }}
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
