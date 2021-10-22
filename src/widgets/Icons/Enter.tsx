import { memo, SVGProps } from 'react'

const Enter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M128 597.333a42.667 42.667 0 0142.667-42.666h512a128 128 0 00128-128V256A42.667 42.667 0 11896 256v170.667A213.333 213.333 0 01682.667 640h-512A42.667 42.667 0 01128 597.333z" />
      <path d="M140.501 627.499a42.667 42.667 0 010-60.331l170.667-170.667a42.667 42.667 0 0160.33 60.331l-140.5 140.501 140.5 140.502a42.667 42.667 0 11-60.33 60.33L140.501 627.5z" />
    </svg>
  )
}

export default memo(Enter)
