import { memo, SVGProps } from 'react'

const SVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M896 468H556V128c0-8.8-7.2-16-16-16h-56c-8.8 0-16 7.2-16 16v340H128c-8.8 0-16 7.2-16 16v56c0 8.8 7.2 16 16 16h340v340c0 8.8 7.2 16 16 16h56c8.8 0 16-7.2 16-16V556h340c8.8 0 16-7.2 16-16v-56c0-8.8-7.2-16-16-16z" />
    </svg>
  )
}

export default memo(SVG)
