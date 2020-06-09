import React from 'react'
import dynamic from 'next/dynamic'

const Sticky = dynamic({
  loader: () => import('./StickyBox'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export default Sticky
