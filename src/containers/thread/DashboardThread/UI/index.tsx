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
  const { primaryColor, bannerLayout, postLayout, changelogLayout, wallpaper } =
    settings

  return (
    <Wrapper>
      <Portal
        title="外观布局"
        desc="社区基本外观，主题色，以及常见布局自定义。"
      />

      <PrimaryColor
        primaryColor={primaryColor}
        isTouched={touched.primaryColor}
      />
      <BannerLayout layout={bannerLayout} isTouched={touched.bannerLayout} />
      <PostListLayout layout={postLayout} isTouched={touched.postLayout} />
      <ChangelogLayout
        layout={changelogLayout}
        isTouched={touched.changelogLayout}
      />
      <Wallpaper wallpaper={wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
