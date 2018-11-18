import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import { Icon } from './styles'

const supportIcons = [
  'post',
  'repo',
  'user',
  'city',
  'tech',
  'radar',
  'share',
  'video',
  'wiki',
  'job',
  'cheatsheet',
  'group',
  'company',
  // user tab
  'publish',
  'billing',
  'comments',
  'settings',
  'likes',
  'favorites',
  // categories
  'pl',
  'frontend',
  'backend',
  'blockchain',
  'ai',
  'mobile',
  'design',
]

const TabIcon = ({ raw, active, small }) => {
  if (R.contains(raw, supportIcons)) {
    return (
      <Icon
        src={`${ICON_CMD}/tab_${raw}.svg`}
        active={raw === active}
        small={small}
      />
    )
  }
  return (
    <Icon
      src={`${ICON_CMD}/tab_list.svg`}
      active={raw === active}
      small={small}
    />
  )
}

export default TabIcon
