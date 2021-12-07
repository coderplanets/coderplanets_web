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
      <path d="M45.344 776.48H453.28v204h116.576v-204h407.936v-58.272H45.344ZM919.52 222.848C919.52 126.24 841.28 48 744.672 48H278.464c-96.608 0-174.848 78.24-174.848 174.848V659.936H919.52V222.848zm-58.272 378.816h-699.36V222.848c0-64.32 52.224-116.544 116.544-116.544h466.24c64.32 0 116.576 52.224 116.576 116.544v378.816z" />
      <path d="M453.28 426.816h87.424l87.424-145.696h-87.424ZM365.888 281.12l-87.424 145.696h87.424L453.28 281.12Z" />
    </svg>
  )
}

export default memo(SVG)
