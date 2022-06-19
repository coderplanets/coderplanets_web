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
      <path d="M810.667 128H213.333a128 128 0 0 0-128 128v341.333a128 128 0 0 0 128 128h256v85.334H298.667a42.667 42.667 0 0 0 0 85.333h426.666a42.667 42.667 0 0 0 0-85.333H554.667v-85.334h256a128 128 0 0 0 128-128V256a128 128 0 0 0-128-128zm42.666 469.333A42.667 42.667 0 0 1 810.667 640H213.333a42.667 42.667 0 0 1-42.666-42.667V256a42.667 42.667 0 0 1 42.666-42.667h597.334A42.667 42.667 0 0 1 853.333 256z" />
    </svg>
  )
}

export default memo(SVG)
