import React from 'react'
import dynamic from 'next/dynamic'

import { TProps as TErrorPage } from '@/components/ErrorPage'

export const Doraemon = dynamic(() => import('@/containers/tool/Doraemon'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const AbuseReport = dynamic(
  () => import('@/containers/tool/AbuseReport'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div />,
    ssr: false,
  },
)

export const ErrorBox = dynamic(() => import('@/containers/tool/ErrorBox'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const Footer = dynamic(() => import('@/containers/unit/Footer'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const ErrorPage = dynamic<TErrorPage>(
  () => import('@/components/ErrorPage'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div />,
    ssr: false,
  },
)
