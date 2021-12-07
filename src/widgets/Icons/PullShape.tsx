import { memo, SVGProps } from 'react'

const SVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 4490 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={10}
      {...props}
    >
      <path d="M1022.166 1.172h2447.02c65.426 0 148.848 30.807 188.378 70.77l751.978 760.78c99.886 101.064 94.974 190.106-19.608 190.106H101.458c-114.622 0-119.533-89.042-19.647-190.107l752.017-760.78C873.318 31.98 956.78 1.173 1022.166 1.173z" />
    </svg>
  )
}

export default memo(SVG)
