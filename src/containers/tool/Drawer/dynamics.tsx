/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'

import {
  ArticleContentLoading,
  EditorLoading,
} from '@/components/LoadingEffects'

const CommonLoading = () => (
  <div>
    <br />
    {/* @ts-ignore */}
    <ArticleContentLoading />
  </div>
)

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
export const PostViewer = dynamic(
  () => import('@/containers/viewer/PostViewer'),
  commonConfig,
)

export const JobViewer = dynamic(
  () => import('@/containers/viewer/JobViewer'),
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

export const PostEditor = dynamic(
  () => import('@/containers/editor/PostEditor'),
  editorConfig,
)

export const JobEditor = dynamic(
  () => import('@/containers/editor/JobEditor'),
  editorConfig,
)

export const RepoEditor = dynamic(
  () => import('@/containers/editor/RepoEditor'),
  editorConfig,
)

// utils
export const C11NSettingPanel = dynamic(
  () => import('@/containers/tool/C11NSettingPanel'),
  commonConfig,
)
