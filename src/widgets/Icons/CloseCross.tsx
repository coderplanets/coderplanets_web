import { memo, SVGProps } from 'react'

const CloseCross = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M656.589 549.827l173.2 216.473a45.158 45.158 0 01-63.489 63.488l-216.473-173.2a60.539 60.539 0 00-75.654 0L257.7 829.789a45.158 45.158 0 01-63.488-63.488l173.2-216.473a60.539 60.539 0 000-75.654L194.211 257.7a45.158 45.158 0 0163.488-63.488l216.473 173.2a60.539 60.539 0 0075.654 0l216.473-173.2a45.158 45.158 0 0163.488 63.488l-173.2 216.473a60.539 60.539 0 000 75.654z" />
    </svg>
  )
}

export default memo(CloseCross)
