/*
 *
 * TagsBar
 *
 */

import { FC } from 'react'
import { keys } from 'ramda'

import { THREAD } from '@/constant'
import { buildLog, pluggedIn } from '@/utils'

import type { TProps as TTagProps } from '../index'

import GobackTag from './GobackTag'
import Folder from './Folder'

import { Wrapper } from '../styles/desktop_view'

import { useInit, onTagSelect } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:TagsBar')

type TProps = Omit<TTagProps, 'view'>

const TagsBarContainer: FC<TProps> = ({
  tagsBar: store,
  thread = THREAD.POST,
  active,
  onSelect,
}) => {
  useInit(store, thread, active)
  const { groupedTags, tagsData, activeTagData } = store
  const groupsKeys = keys(groupedTags)

  console.log('# tagsData -> ', tagsData)

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
          key={String(groupKey)}
          title={String(groupKey)}
          groupTags={groupedTags[String(groupKey)]}
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

export default pluggedIn(TagsBarContainer) as FC<TProps>
