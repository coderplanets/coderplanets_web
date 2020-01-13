/* eslint-disable react/display-name */
import React from 'react'
import dynamic from 'next/dynamic'

import {
  ArticleContentLoading,
  EditorLoading,
} from '@components/LoadingEffects'

const CommonLoading = () => (
  <div>
    <br />
    <ArticleContentLoading />
  </div>
)

// viewers
export const DynamicAccountViewer = dynamic({
  loader: () => import('@containers/viewer/AccountViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicPostViewer = dynamic({
  loader: () => import('@containers/viewer/PostViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicJobViewer = dynamic({
  loader: () => import('@containers/viewer/JobViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicMailsViewer = dynamic({
  loader: () => import('@containers/viewer/MailsViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicRepoViewer = dynamic({
  loader: () => import('@containers/viewer/RepoViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicVideoViewer = dynamic({
  loader: () => import('@containers/viewer/VideoViewer'),
  loading: () => <CommonLoading />,
  ssr: false,
})

// editors
export const DynamicAccountEditor = dynamic({
  loader: () => import('@containers/AccountEditor'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicPostEditor = dynamic({
  loader: () => import('@containers/PostEditor'),
  loading: () => <EditorLoading />,
  ssr: false,
})

export const DynamicJobEditor = dynamic({
  loader: () => import('@containers/JobEditor'),
  loading: () => <EditorLoading />,
  ssr: false,
})

export const DynamicVideoEditor = dynamic({
  loader: () => import('@containers/VideoEditor'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicRepoEditor = dynamic({
  loader: () => import('@containers/RepoEditor'),
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicStateTree = dynamic({
  loader: () => import('@components/StateTree'),
  loading: () => <CommonLoading />,
  ssr: false,
})
