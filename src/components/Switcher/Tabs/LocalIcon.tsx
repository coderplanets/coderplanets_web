import { FC, memo } from 'react'
import {
  TabPostIcon,
  TabRadarIcon,
  TabUserIcon,
  TabJobIcon,
  TabRepoIcon,
  TabCheatsheetIcon,
  // user
  TabLikesIcon,
  TabPublishIcon,
  TabBillingIcon,
  TabCommentsIcon,
  TabSettingsIcon,
  TabFavoritesIcon,
} from '../styles/tabs/local_icon'

type TProps = {
  raw: string
  active: boolean
  small?: boolean
}

const TabIcon: FC<TProps> = ({ raw, active, small }) => {
  switch (raw) {
    case 'radar': {
      /* @ts-ignore */
      return <TabRadarIcon $active={active} $small={small} />
    }

    case 'user': {
      /* @ts-ignore */
      return <TabUserIcon $active={active} $small={small} />
    }

    case 'job': {
      /* @ts-ignore */
      return <TabJobIcon $active={active} $small={small} />
    }

    case 'repo': {
      /* @ts-ignore */
      return <TabRepoIcon $active={active} $small={small} />
    }

    case 'cheatsheet': {
      /* @ts-ignore */
      return <TabCheatsheetIcon $active={active} $small={small} />
    }

    case 'favorites': {
      /* @ts-ignore */
      return <TabFavoritesIcon $active={active} $small={small} />
    }

    case 'likes': {
      /* @ts-ignore */
      return <TabLikesIcon $active={active} $small={small} />
    }

    case 'publish': {
      /* @ts-ignore */
      return <TabPublishIcon $active={active} $small={small} />
    }

    case 'billing': {
      /* @ts-ignore */
      return <TabBillingIcon $active={active} $small={small} />
    }

    case 'comments': {
      /* @ts-ignore */
      return <TabCommentsIcon $active={active} $small={small} />
    }

    case 'settings': {
      /* @ts-ignore */
      return <TabSettingsIcon $active={active} $small={small} />
    }

    default: {
      /* @ts-ignore */
      return <TabPostIcon $active={active} $small={small} />
    }
  }
}

export default memo(TabIcon)
