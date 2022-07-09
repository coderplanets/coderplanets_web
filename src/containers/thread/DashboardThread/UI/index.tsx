import { FC, memo } from 'react'

import { Divider } from '@/widgets/Common'

import Portal from '../Portal'
import PrimaryColor from './PrimaryColor'
import Wallpaper from './Wallpaper'
import BrandLayout from './BrandLayout'
import BannerLayout from './BannerLayout'
import PostListLayout from './PostListLayout'
import ChangelogLayout from './ChangelogLayout'
import BannerNotifyLayout from './BannerNotifyLayout'

import type { TUiSettings, TTouched } from '../spec'
import { Wrapper } from '../styles/ui'

type TProps = {
  settings: TUiSettings
  touched: TTouched
}

const UI: FC<TProps> = ({ settings, touched }) => {
  const {
    primaryColor,
    brandLayout,
    bannerLayout,
    bannerNotifyLayout,
    bannerNotifyBg,
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
      <Divider top={0} bottom={60} />
      <BrandLayout
        layout={brandLayout}
        isTouched={touched.brandLayout}
        saving={saving}
      />
      <Divider top={20} bottom={60} />
      <BannerLayout
        layout={bannerLayout}
        isTouched={touched.bannerLayout}
        saving={saving}
      />
      <Divider top={20} bottom={60} />
      <PostListLayout
        layout={postLayout}
        isTouched={touched.postLayout}
        saving={saving}
      />
      <Divider top={20} bottom={60} />
      <ChangelogLayout
        layout={changelogLayout}
        isTouched={touched.changelogLayout}
        saving={saving}
      />
      <Divider top={30} bottom={60} />
      <BannerNotifyLayout
        layout={bannerNotifyLayout}
        bg={bannerNotifyBg}
        isLayoutTouched={touched.bannerNotifyLayout}
        isBgTouched={touched.bannerNotifyBg}
        saving={saving}
      />
      <Divider top={20} bottom={60} />
      <Wallpaper wallpaper={wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
