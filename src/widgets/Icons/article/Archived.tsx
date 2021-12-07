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
      <path d="M908.16 431.36a47.36 47.36 0 0 0-48 48V803.2a89.6 89.6 0 0 1-98.56 77.44H262.4a89.6 89.6 0 0 1-98.56-77.44V479.36a48 48 0 0 0-96 0V803.2a185.6 185.6 0 0 0 192 173.44h499.2a185.6 185.6 0 0 0 192-173.44V479.36a48 48 0 0 0-42.88-48zm-63.36-384H179.2a161.92 161.92 0 0 0 0 323.2h665.6a161.92 161.92 0 0 0 0-320zm0 227.2H179.2a64 64 0 0 1 0-128h665.6a64 64 0 0 1 0 131.2z" />
      <path d="M656 623.36a48 48 0 0 0 0-96H368a48 48 0 0 0 0 96z" />
    </svg>
  )
}

export default memo(SVG)
