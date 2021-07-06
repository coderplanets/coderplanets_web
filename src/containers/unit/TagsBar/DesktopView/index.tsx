/*
 *
 * TagsBar
 *
 */

import { FC } from 'react'
import { keys } from 'ramda'

import { buildLog, pluggedIn } from '@/utils'

import type { TProps as TTagProps } from '../index'

import GobackTag from './GobackTag'
import Folder from './Folder'

import { Wrapper } from '../styles/desktop_view'

import { useInit, onTagSelect } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:TagsBar')

type TProps = Omit<TTagProps, 'view'>

const TagsBarContainer: FC<TProps> = ({ tagsBar: store, onSelect }) => {
  useInit(store)
  const { groupedTags, tagsData, activeTagData } = store
  const groupsKeys = keys(groupedTags) as string[]

  return (
    <Wrapper>
      {activeTagData.title && (
        <GobackTag
          onSelect={(tag) => {
            onTagSelect(tag)
            onSelect()
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
            onSelect()
          }}
        />
      ))}
    </Wrapper>
  )
}

export default pluggedIn(TagsBarContainer) as FC<TProps>
