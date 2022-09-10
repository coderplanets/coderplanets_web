/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
// import EditorLoading from '@/widgets/Loading/EditorLoading'

import { LavaLoadingWrapper } from './styles'

const CommonLoading = () => {
  return (
    <LavaLoadingWrapper>
      <LavaLampLoading />
    </LavaLoadingWrapper>
  )
}

// editor style loading config
// const editorConfig = {
//   // @ts-ignore
//   loading: () => <EditorLoading />,
//   ssr: false,
// }

// viewers
export const ArticleViewer = dynamic(
  () => import('@/containers/viewer/ArticleViewer'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

export const MailsViewer = dynamic(
  () => import('@/containers/viewer/MailsViewer'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

export const RepoViewer = dynamic(
  () => import('@/containers/viewer/RepoViewer'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

// editors
export const AccountEditor = dynamic(
  () => import('@/containers/editor/AccountEditor'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

// user lister
export const UserLister = dynamic(
  () => import('@/containers/user/UserLister'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

// export const RepoEditor = dynamic(
//   () => import('@/containers/editor/RepoEditor'),
//   editorConfig,
// )

// utils
export const C11NSettingPanel = dynamic(
  () => import('@/containers/tool/C11NSettingPanel'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

export const WallpaperEditor = dynamic(
  () => import('@/containers/editor/WallpaperEditor'),
  {
    loading: () => <CommonLoading />,
    ssr: false,
  },
)

export const DashboardDesc = dynamic(() => import('@/widgets/DashboardDesc'), {
  loading: () => <CommonLoading />,
  ssr: false,
})
