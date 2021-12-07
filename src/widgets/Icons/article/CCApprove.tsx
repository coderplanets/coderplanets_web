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
      <path d="M422.5 601.3V493.1c-79.1-34.6-134.3-113.6-134.3-205.2C288.2 164.2 388.7 64 512.1 64 635.8 64 736 164.5 736 287.9c0 91.8-55.4 170.7-134.3 205.2v108.2H803c61.9 0 112.1 49.7 112.1 112v111.9H109v-112c0-61.8 50.4-112 112.1-112h201.4zM153.8 870h716.5v89.6H153.8V870zm0 0" />
    </svg>
  )
}

export default memo(SVG)
