import { FC, memo } from 'react'
import { THREAD } from '@/constant'

import {
  PostIcon,
  RadarIcon,
  CPerIcon,
  JobIcon,
  BlogIcon,
  // user
  PublishIcon,
  TabBillingIcon,
  TabCommentsIcon,
  SettingIcon,
} from '../styles/tabs/local_icon'

type TProps = {
  raw: string
  active: boolean
  small?: boolean
}

const TabIcon: FC<TProps> = ({ raw, active, small }) => {
  switch (raw) {
    case THREAD.RADAR: {
      /* @ts-ignore */
      return <RadarIcon $active={active} $small={small} />
    }
    case THREAD.BLOG: {
      return <BlogIcon $active={active} $small={small} />
    }
    case THREAD.CPER: {
      return <CPerIcon $active={active} $small={small} />
    }

    case THREAD.JOB: {
      /* @ts-ignore */
      return <JobIcon $active={active} $small={small} />
    }

    case 'publish': {
      /* @ts-ignore */
      return <PublishIcon $active={active} $small={small} />
    }

    case 'billing': {
      /* @ts-ignore */
      return <TabBillingIcon $active={active} $small={small} />
    }

    case 'comments': {
      /* @ts-ignore */
      return <TabCommentsIcon $active={active} $small={small} />
    }

    case THREAD.SETTING: {
      /* @ts-ignore */
      return <SettingIcon $active={active} $small={small} />
    }

    default: {
      /* @ts-ignore */
      return <PostIcon $active={active} $small={small} />
    }
  }
}

export default memo(TabIcon)
