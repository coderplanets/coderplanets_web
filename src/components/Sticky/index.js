import React from 'react'
import dynamic from 'next/dynamic'

export const Sticky = dynamic(() => import('./StickyBox'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

export default Sticky
