import React from 'react'
import dynamic from 'next/dynamic'

import { ArticleContentLoading, EditorLoading } from 'components/LoadingEffects'

const CommonLoading = () => (
  <div>
    <br />
    <ArticleContentLoading />
  </div>
)

// viewers
export const DynamicAccountViewer = dynamic({
  loader: () => import('../AccountViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicPostViewer = dynamic({
  loader: () => import('../PostViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicJobViewer = dynamic({
  loader: () => import('../JobViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicMailsViewer = dynamic({
  loader: () => import('../MailsViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicRepoViewer = dynamic({
  loader: () => import('../RepoViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicVideoViewer = dynamic({
  loader: () => import('../VideoViewer'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

// editors
export const DynamicAccountEditor = dynamic({
  loader: () => import('../AccountEditor'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicPostEditor = dynamic({
  loader: () => import('../PostEditor'),
  /* eslint-disable-next-line */
  loading: () => <EditorLoading />,
  ssr: false,
})

export const DynamicJobEditor = dynamic({
  loader: () => import('../JobEditor'),
  /* eslint-disable-next-line */
  loading: () => <EditorLoading />,
  ssr: false,
})

export const DynamicVideoEditor = dynamic({
  loader: () => import('../VideoEditor'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicRepoEditor = dynamic({
  loader: () => import('../RepoEditor'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})

export const DynamicStateTree = dynamic({
  loader: () => import('components/StateTree'),
  /* eslint-disable-next-line */
  loading: () => <CommonLoading />,
  ssr: false,
})
