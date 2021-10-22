import { keys, isEmpty, filter } from 'ramda'

import type { TTag } from '@/spec'
import { ICON_CMD } from '@/config'
import { groupByKey } from '@/utils/helper'

import type { TMenu } from './spec'

export const tags2Options = (tags: TTag[]): TMenu => {
  const groupedTags = groupByKey(tags, 'group')
  const formated = []

  keys(groupedTags).forEach((group, index) => {
    formated.push({
      id: index,
      title: group,
      icon: `${ICON_CMD}/navi/location.svg`,
      options: [{ id: '', title: '全部' }, ...groupedTags[group]],
    })
  })

  return formated
}

export const initActiveMap = (items: TMenu) => {
  const menuMap = {}
  for (let index = 0; index < items.length; index += 1) {
    const element = items[index]

    const content = element.options ? element.options[0] : element
    menuMap[element.id] = { ...content }
  }

  return menuMap
}

export const getSelectedTags = (activeMap: Record<string, TTag>): TTag[] => {
  const tagList = []

  const selectedIdx = filter(
    (key) => !isEmpty(activeMap[key].id),
    keys(activeMap),
  )

  selectedIdx.forEach((idx) => {
    if (activeMap[idx]) {
      tagList.push(activeMap[idx])
    }
  })

  return tagList
}
