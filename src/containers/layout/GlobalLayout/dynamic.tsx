import dynamic from 'next/dynamic'

import { TProps as TErrorPage } from '@/components/ErrorPage'

export const CustomScroller = dynamic(
  () => import('@/components/CustomScroller'),
  {
    ssr: false,
  },
)

export const Drawer = dynamic(() => import('@/containers/tool/Drawer'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const ModeLine = dynamic(() => import('@/containers/unit/ModeLine'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const Doraemon = dynamic(() => import('@/containers/tool/Doraemon'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const Share = dynamic(() => import('@/containers/tool/Share'), {
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
