/*
 *
 * TagsBar
 *
 */

import { FC } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog, pluggedIn, sortByColor, Trans } from '@/utils'

import type { TProps as TTagProps } from './index'
import {
  Wrapper,
  TagItem,
  TagDot,
  TagTitle,
  AllTagIcon,
} from './styles/card_view'

import { useInit, onTagSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:TagsBar')

type TProps = Omit<TTagProps, 'view'>

const TagsBarContainer: FC<TProps> = ({
  tagsBar: store,
  thread,
  active,
  onSelect,
}) => {
  useInit(store, thread, active)

  const { tagsData, activeTagData } = store

  const sortedTags = sortByColor(tagsData)
  const emptytag = { id: '', title: '', color: '' }

  return (
    <Wrapper>
      {activeTagData.title && (
        <TagItem
          onClick={() => {
            onTagSelect(emptytag)
            onSelect(emptytag)
          }}
        >
          <AllTagIcon src={`${ICON_CMD}/all_tags.svg`} />
          <TagTitle>全部</TagTitle>
        </TagItem>
      )}

      {sortedTags.map(({ id, color, title }) => (
        <TagItem
          key={id}
          onClick={() => {
            onTagSelect(emptytag)
            onSelect(emptytag)
          }}
        >
          <TagDot active={!!activeTagData.title} color={color} title={title} />
          <TagTitle>{Trans(title)}</TagTitle>
        </TagItem>
      ))}
    </Wrapper>
  )
}

export default pluggedIn(TagsBarContainer) as FC<TProps>
