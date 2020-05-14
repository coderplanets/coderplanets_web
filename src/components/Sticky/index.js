import dynamic from 'next/dynamic'

import StickyBox from './StickyBox'

const Sticky = dynamic({
  loader: () => import('./StickyBox'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

export default Sticky
