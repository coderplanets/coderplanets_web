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
      <path d="m914.286 806.034-336.457-675.84c-36.572-71.68-95.086-71.68-131.658 0l-336.457 675.84c-36.571 71.68 0 130.195 80.457 130.195H833.83c80.457 0 117.028-58.515 80.457-130.195z" />
    </svg>
  )
}

export default memo(SVG)
