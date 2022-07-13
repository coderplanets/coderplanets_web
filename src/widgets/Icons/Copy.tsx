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
      <path d="M768 682.667v-512a85.333 85.333 0 0 0-85.333-85.334h-512a85.333 85.333 0 0 0-85.334 85.334v512A85.333 85.333 0 0 0 170.667 768h512A85.333 85.333 0 0 0 768 682.667zm-597.333-512h512v512h-512zM853.333 256v512A85.333 85.333 0 0 1 768 853.333H256a85.333 85.333 0 0 0 85.333 85.334H768A170.667 170.667 0 0 0 938.667 768V341.333A85.333 85.333 0 0 0 853.333 256z" />
    </svg>
  )
}

export default memo(SVG)
