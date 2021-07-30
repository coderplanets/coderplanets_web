import { memo, SVGProps } from 'react'

const Warning = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M512 981.333C252.8 981.333 42.667 771.2 42.667 512S252.8 42.667 512 42.667 981.333 252.8 981.333 512 771.2 981.333 512 981.333zm0-170.666A85.333 85.333 0 10512 640a85.333 85.333 0 000 170.667zm0-597.334a64 64 0 00-64 64v256a64 64 0 00128 0v-256a64 64 0 00-64-64z" />
    </svg>
  )
}

export default memo(Warning)
