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
      <path d="M740.181 186.667a128 128 0 0 1 128 128v426.666a128 128 0 0 1-128 128H313.515a128 128 0 0 1-128-128V314.667a128 128 0 0 1 128-128H740.18zM249.515 421.333v320a64 64 0 0 0 64 64H740.18a64 64 0 0 0 64-64v-320H249.515zm0-64H804.18v-42.666a64 64 0 0 0-64-64H313.515a64 64 0 0 0-64 64v42.666z" />
      <path d="M356.181 506.667h85.334V720H356.18z" />
    </svg>
  )
}

export default memo(SVG)
