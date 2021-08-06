/*
 *
 * RichEditor
 *
 */

import dynamic from 'next/dynamic'

export const RichEditor = dynamic(() => import('./RealEditor'), {
  ssr: false,
})

export default RichEditor
