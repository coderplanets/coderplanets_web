import React from 'react'
import {
  TabPostIcon,
  TabTechIcon,
  TabRadarIcon,
  TabShareIcon,
  TabUserIcon,
  TabCityIcon,
  TabJobIcon,
  TabWikiIcon,
  TabVideoIcon,
  TabRepoIcon,
  TabCheatsheetIcon,
} from './styles'

/*
   const supportIcons = [
   'group',
   'company',
   'publish',
   'billing',
   'comments',
   'settings',
   'likes',
   'favorites',
   'pl',
   'frontend',
   'backend',
   'blockchain',
   'ai',
   'mobile',
   'design',
   ]
 */

const TabIcon = ({ raw, active, small }) => {
  switch (raw) {
    case 'tech': {
      return <TabTechIcon active={active} small={small} />
    }
    case 'radar': {
      return <TabRadarIcon active={active} small={small} />
    }
    case 'share': {
      return <TabShareIcon active={active} small={small} />
    }
    case 'user': {
      return <TabUserIcon active={active} small={small} />
    }
    case 'job': {
      return <TabJobIcon active={active} small={small} />
    }
    case 'city': {
      return <TabCityIcon active={active} small={small} />
    }
    case 'wiki': {
      return <TabWikiIcon active={active} small={small} />
    }
    case 'video': {
      return <TabVideoIcon active={active} small={small} />
    }
    case 'repo': {
      return <TabRepoIcon active={active} small={small} />
    }
    case 'cheatsheet': {
      return <TabCheatsheetIcon active={active} small={small} />
    }
    default: {
      return <TabPostIcon active={active} small={small} />
    }
  }
}

/*
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
 */

export default TabIcon
