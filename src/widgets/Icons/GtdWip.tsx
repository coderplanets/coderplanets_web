import { memo, SVGProps } from 'react'

const Wip = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 1024a512 512 0 1 1 512-512 512.597 512.597 0 0 1-512 512zm0-921.6A409.6 409.6 0 1 0 921.6 512 410.112 410.112 0 0 0 512 102.4z" />
      <path d="M469.333 979.37C230.485 957.782 42.667 756.396 42.667 512S230.4 66.219 469.333 44.63v934.74z" />
      <path d="M426.667 930.133V93.867C232.107 133.547 85.333 305.92 85.333 512a427.435 427.435 0 0 0 341.334 418.133M512 1024C229.632 1023.915 0 794.283 0 512S229.717 0 512 0v1023.915z" />
    </svg>
  )
}

export default memo(Wip)
