import { FC, memo } from 'react'
import { THREAD } from '@/constant'

import {
  PostIcon,
  RadarIcon,
  CPerIcon,
  JobIcon,
  BlogIcon,
  CityIcon,
  WorksIcon,
  // user
  PublishIcon,
  // TabBillingIcon,
  TabCommentsIcon,
  // SettingIcon,
} from '../styles/tabs/local_icon'

type TProps = {
  raw: string
  active: boolean
  small?: boolean
}

const TabIcon: FC<TProps> = ({ raw, active, small }) => {
  switch (raw) {
    case THREAD.RADAR: {
      return <RadarIcon $active={active} $small={small} />
    }
    case THREAD.BLOG: {
      return <BlogIcon $active={active} $small={small} />
    }
    case THREAD.CPER: {
      return <CPerIcon $active={active} $small={small} />
    }

    case THREAD.JOB: {
      return <JobIcon $active={active} $small={small} />
    }

    case 'publish': {
      return <PublishIcon $active={active} $small={small} />
    }

    case THREAD.MAP: {
      return <CityIcon $active={active} $small={small} />
    }
    case THREAD.WORKS: {
      return <WorksIcon $active={active} $small={small} />
    }

    // case 'billing': {
    //   return <TabBillingIcon $active={active} $small={small} />
    // }

    case 'comments': {
      return <TabCommentsIcon $active={active} $small={small} />
    }

    // case THREAD.SETTING: {
    //   return <SettingIcon $active={active} $small={small} />
    // }

    default: {
      return <PostIcon $active={active} $small={small} />
    }
  }
}

export default memo(TabIcon)
