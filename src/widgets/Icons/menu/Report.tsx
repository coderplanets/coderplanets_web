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
      <path d="M801.6 211.7c-23.8 5-147.2 23.4-213.5 14.1-117.4-16.6-179-93.1-373-32.6-37.3 15.2-47.8 38.1-47.8 74l-1 592.2c0 11 3.8 19.8 11.4 26.3 7.1 7.4 17 11.4 27.4 11.1 10.3 0 19.5-3.8 27.4-11.1 7.6-6.6 11.4-15.3 11.4-26.3v-241c169.9-45.3 301.6 24.5 321 31.7 87.8 32.7 207.8.3 253.9-24.1 14.9-6.6 22.3-17.4 22.3-32.5V242.3c-.1-22-15.8-35.7-39.5-30.6zm0 0" />
    </svg>
  )
}

export default memo(SVG)
