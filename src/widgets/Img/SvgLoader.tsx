import { FC } from 'react'
import dynamic from 'next/dynamic'

type TProps = {
  src: string
  beforeInjection: (svg: HTMLElement) => void
  onClick: () => void
}
const ReactSVG = dynamic(
  // @ts-ignore
  () => import('react-svg').then((mod) => mod.ReactSVG),
  {
    ssr: false,
  },
)

// @ts-ignore
export default ReactSVG as FC<TProps>
