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
export const DynamicAccountViewer = dynamic(
  () => import('@/containers/viewer/AccountViewer'),
  commonConfig,
)

export const DynamicPostViewer = dynamic(
  () => import('@/containers/viewer/PostViewer'),
  commonConfig,
)

export const DynamicJobViewer = dynamic(
  () => import('@/containers/viewer/JobViewer'),
  commonConfig,
)

export const DynamicMailsViewer = dynamic(
  () => import('@/containers/viewer/MailsViewer'),
  commonConfig,
)

export const DynamicRepoViewer = dynamic(
  () => import('@/containers/viewer/RepoViewer'),
  commonConfig,
)

export const DynamicVideoViewer = dynamic(
  () => import('@/containers/viewer/VideoViewer'),
  commonConfig,
)

// editors
export const DynamicAccountEditor = dynamic(
  () => import('@/containers/editor/AccountEditor'),
  editorConfig,
)

export const DynamicPostEditor = dynamic(
  () => import('@/containers/editor/PostEditor'),
  editorConfig,
)

export const DynamicJobEditor = dynamic(
  () => import('@/containers/editor/JobEditor'),
  editorConfig,
)

export const DynamicVideoEditor = dynamic(
  () => import('@/containers/editor/VideoEditor'),
  editorConfig,
)

export const DynamicRepoEditor = dynamic(
  () => import('@/containers/editor/RepoEditor'),
  editorConfig,
)

// utils
export const DynamicStateTree = dynamic(
  () => import('@/components/StateTree'),
  commonConfig,
)
