import React from 'react'
import dynamic from 'next/dynamic'

export const Doraemon = dynamic(() => import('@/containers/Doraemon'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const ErrorBox = dynamic(() => import('@/containers/ErrorBox'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export const Footer = dynamic(() => import('@/containers/Footer'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})
export const ErrorPage = dynamic(() => import('@/components/ErrorPage'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})
