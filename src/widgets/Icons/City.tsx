import { memo, SVGProps } from 'react'

const City = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 74.667c194.133 0 352 160 352 354.133 0 119.467-64 236.8-168.533 349.867C659.2 817.067 620.8 851.2 582.4 883.2c-12.8 10.667-25.6 21.333-38.4 27.733l-6.4 4.267-8.533 6.4c-10.667 6.4-25.6 6.4-36.267 0-2.133-2.133-4.267-4.267-8.533-6.4l-12.8-8.533c-8.534-6.4-19.2-14.934-29.867-23.467-38.4-32-76.8-66.133-113.067-104.533C224 667.733 160 548.267 160 428.8c0-194.133 157.867-354.133 352-354.133zm0 224C448 298.667 394.667 352 394.667 416S448 533.333 512 533.333 629.333 480 629.333 416 576 298.667 512 298.667z" />
    </svg>
  )
}

export default memo(City)
