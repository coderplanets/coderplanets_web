/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'

import { LavaLampLoading } from '@/widgets/dynamic'
import EditorLoading from '@/widgets/Loading/EditorLoading'

const CommonLoading = () => <LavaLampLoading top={200} left={420} />

// common style loading config
const commonConfig = {
  loading: () => <CommonLoading />,
  ssr: false,
}

// editor style loading config
const editorConfig = {
  // @ts-ignore
  loading: () => <EditorLoading />,
  ssr: false,
}

// viewers
export const ArticleViewer = dynamic(
  () => import('@/containers/viewer/ArticleViewer'),
  commonConfig,
)

export const MailsViewer = dynamic(
  () => import('@/containers/viewer/MailsViewer'),
  commonConfig,
)

export const RepoViewer = dynamic(
  () => import('@/containers/viewer/RepoViewer'),
  commonConfig,
)

// editors
export const AccountEditor = dynamic(
  () => import('@/containers/editor/AccountEditor'),
  editorConfig,
)

// export const RepoEditor = dynamic(
//   () => import('@/containers/editor/RepoEditor'),
//   editorConfig,
// )

// utils
export const C11NSettingPanel = dynamic(
  () => import('@/containers/tool/C11NSettingPanel'),
  commonConfig,
)
