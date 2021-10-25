import { FC } from 'react'
import dynamic from 'next/dynamic'

type TProps = {
  src: string
  beforeInjection: (svg: HTMLElement) => void
  onClick: () => void
}
const ReactSVG = dynamic(
  () => import('react-svg').then((mod) => mod.ReactSVG),
  {
    ssr: false,
  },
)

export default ReactSVG as FC<TProps>
