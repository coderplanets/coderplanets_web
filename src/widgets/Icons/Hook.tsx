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
      <path d="M416.832 798.08c-16.192 0-32.32-6.208-44.672-18.56L119.424 525.76c-24.64-24.768-24.64-64.96 0-89.728 24.704-24.768 64.704-24.768 89.344 0l208.064 208.896L814.4 245.76c24.64-24.832 64.64-24.832 89.344 0 24.64 24.768 24.64 64.896 0 89.664L461.504 779.52c-12.352 12.352-28.544 18.56-44.672 18.56z" />
    </svg>
  )
}

export default memo(SVG)
