import { memo, SVGProps } from 'react'

const Info = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 1024c282.771 0 512-229.23 512-512S794.77 0 512 0 0 229.23 0 512s229.23 512 512 512zm-80-768c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80V256zm-.001 256c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80V512z" />
    </svg>
  )
}

export default memo(Info)
