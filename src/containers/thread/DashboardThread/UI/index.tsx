import { FC, memo } from 'react'

import Portal from '../Portal'
import PrimaryColor from './PrimaryColor'
import Wallpaper from './Wallpaper'
import BannerLayout from './BannerLayout'
import PostListLayout from './PostListLayout'
import ChangelogLayout from './ChangelogLayout'

import type { TUiSettings, TTouched } from '../spec'
import { Wrapper } from '../styles/ui'

type TProps = {
  settings: TUiSettings
  touched: TTouched
}

const UI: FC<TProps> = ({ settings, touched }) => {
  const {
    primaryColor,
    bannerLayout,
    postLayout,
    changelogLayout,
    wallpaper,
    saving,
  } = settings

  return (
    <Wrapper>
      <Portal
        title="外观布局"
        desc="社区基本外观，主题色，以及常见布局自定义。"
      />

      <PrimaryColor
        primaryColor={primaryColor}
        isTouched={touched.primaryColor}
        saving={saving}
      />
      <BannerLayout
        layout={bannerLayout}
        isTouched={touched.bannerLayout}
        saving={saving}
      />
      <PostListLayout
        layout={postLayout}
        isTouched={touched.postLayout}
        saving={saving}
      />
      <ChangelogLayout
        layout={changelogLayout}
        isTouched={touched.changelogLayout}
        saving={saving}
      />
      <Wallpaper wallpaper={wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
