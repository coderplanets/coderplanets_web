/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { buildLog, pluggedIn, sortByColor, Trans } from '@/utils'

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

const TagsBarContainer = ({ tagsBar: store, thread, active, onSelect }) => {
  useInit(store, thread, active)

  const { tagsData, activeTagData } = store

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
        </TagItem>
      ))}
    </Wrapper>
  )
}

TagsBarContainer.propTypes = {
  tagsBar: T.object.isRequired,
  thread: T.string,
  onSelect: T.func.isRequired,
  active: T.shape({
    id: T.string,
    title: T.string,
    color: T.string,
  }),
}

TagsBarContainer.defaultProps = {
  thread: THREAD.POST,
  active: {},
}

export default pluggedIn(TagsBarContainer)
