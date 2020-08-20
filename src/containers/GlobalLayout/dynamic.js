import React from 'react'
import dynamic from 'next/dynamic'

export const Doraemon = dynamic({
  loader: () => import('@/containers/Doraemon'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export const ErrorBox = dynamic({
  loader: () => import('@/containers/ErrorBox'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export const Footer = dynamic({
  loader: () => import('@/containers/Footer'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export const ErrorPage = dynamic({
  loader: () => import('@/components/ErrorPage'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})
