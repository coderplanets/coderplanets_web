/* eslint-disable react/display-name */
import React from 'react'
import dynamic from 'next/dynamic'

import {
  ArticleContentLoading,
  EditorLoading,
} from '@/components/LoadingEffects'

const CommonLoading = () => (
  <div>
    <br />
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
  loading: () => <EditorLoading />,
  ssr: false,
}

// viewers
export const AccountViewer = dynamic(
  () => import('@/containers/viewer/AccountViewer'),
  commonConfig,
)

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

export const VideoViewer = dynamic(
  () => import('@/containers/viewer/VideoViewer'),
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

export const VideoEditor = dynamic(
  () => import('@/containers/editor/VideoEditor'),
  editorConfig,
)

export const RepoEditor = dynamic(
  () => import('@/containers/editor/RepoEditor'),
  editorConfig,
)

// utils
export const StateTree = dynamic(
  () => import('@/components/StateTree'),
  commonConfig,
)

export const C11NSettingPanel = dynamic(
  () => import('@/containers/C11NSettingPanel'),
  commonConfig,
)

export const MobileHeaderNavi = dynamic(
  () => import('@/components/Navigator/MorePanel'),
  commonConfig,
)
