/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'
import { keys } from 'ramda'

import { THREAD, TOPIC } from '@/constant'
import { buildLog, pluggedIn, groupByKey } from '@/utils'

import GobackTag from './GobackTag'
import Folder from './Folder'

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
  // const tagsByGroup = groupByKey(tagsData, 'group')
  const tagsByGroup = groupByKey(
    tagsData.map((tag) => {
      if (tag.id < 4) {
        tag.group = '这是第一组'
      } else {
        tag.group = '这是第二组' // '__default__'
      }
      return tag
    }),
    'group',
  )
  // console.log('tagsByGroup: ', tagsByGroup)
  const groupsKeys = keys(tagsByGroup)

  return (
    <Wrapper>
      {activeTagData.title && <GobackTag onSelect={onSelect} />}
      {groupsKeys.map((groupKey) => (
        <Folder
          key={groupKey}
          title={groupKey}
          groupTags={tagsByGroup[groupKey]}
          allTags={tagsData}
          activeTag={activeTagData}
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
