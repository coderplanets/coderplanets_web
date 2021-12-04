import { memo, SVGProps } from 'react'

const ArrowSimple = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M347.2 511.872a32 32 0 0 1 9.984-23.232l265.6-251.264a32 32 0 0 1 43.968 46.528L425.664 511.936 666.752 740.16a32.064 32.064 0 0 1 1.28 45.248c-12.16 12.8-32.448 13.376-45.248 1.28l-265.6-251.52a32 32 0 0 1-9.984-23.296z" />
    </svg>
  )
}

export default memo(ArrowSimple)
