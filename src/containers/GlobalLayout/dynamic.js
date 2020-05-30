import dynamic from 'next/dynamic'

export const Doraemon = dynamic({
  loader: () => import('@/containers/Doraemon'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export const Preview = dynamic({
  loader: () => import('@/containers/Preview'),
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
