import { FC } from 'react'
import dynamic from 'next/dynamic'

export type TProps = {
  testid?: string
  type?: 'body' | 'drawer'
}

const GotoTop = dynamic(() => import('./RealGotoTop'), {
  ssr: false,
})

export default GotoTop as FC<TProps>
