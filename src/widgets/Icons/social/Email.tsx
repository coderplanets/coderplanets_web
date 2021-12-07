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
      <path d="M1024.1 238.9c0-37.5-30.7-68.3-68.3-68.3H68.3C30.8 170.6 0 201.3 0 238.9l512.1 341.4 512-341.4z" />
      <path d="M.1 324.3v460.8c0 37.5 30.7 68.3 68.3 68.3h887.5c37.5 0 68.3-30.7 68.3-68.3V324.3L512.1 665.6.1 324.3z" />
    </svg>
  )
}

export default memo(SVG)
