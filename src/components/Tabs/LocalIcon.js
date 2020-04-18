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
  // user
  TabLikesIcon,
  TabPublishIcon,
  TabBillingIcon,
  TabCommentsIcon,
  TabSettingsIcon,
  TabFavoritesIcon,
} from './styles/local_icon'

const TabIcon = ({ raw, active, small }) => {
  switch (raw) {
    case 'tech':
      return <TabTechIcon active={active ? 1 : 0} small={small} />

    case 'radar':
      return <TabRadarIcon active={active ? 1 : 0} small={small} />

    case 'share':
      return <TabShareIcon active={active ? 1 : 0} small={small} />

    case 'user':
      return <TabUserIcon active={active ? 1 : 0} small={small} />

    case 'job':
      return <TabJobIcon active={active ? 1 : 0} small={small} />

    case 'city':
      return <TabCityIcon active={active ? 1 : 0} small={small} />

    case 'wiki':
      return <TabWikiIcon active={active ? 1 : 0} small={small} />

    case 'video':
      return <TabVideoIcon active={active ? 1 : 0} small={small} />

    case 'repo':
      return <TabRepoIcon active={active ? 1 : 0} small={small} />

    case 'cheatsheet':
      return <TabCheatsheetIcon active={active ? 1 : 0} small={small} />

    case 'favorites':
      return <TabFavoritesIcon active={active ? 1 : 0} small={small} />

    case 'likes':
      return <TabLikesIcon active={active ? 1 : 0} small={small} />

    case 'publish':
      return <TabPublishIcon active={active ? 1 : 0} small={small} />

    case 'billing':
      return <TabBillingIcon active={active ? 1 : 0} small={small} />

    case 'comments':
      return <TabCommentsIcon active={active ? 1 : 0} small={small} />

    case 'settings':
      return <TabSettingsIcon active={active ? 1 : 0} small={small} />

    default:
      return <TabPostIcon active={active ? 1 : 0} small={small} />
  }
}

export default React.memo(TabIcon)
