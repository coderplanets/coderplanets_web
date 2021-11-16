import { memo, SVGProps } from 'react'

const Bot = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 85.333a85.333 85.333 0 0185.333 85.334c0 31.573-17.066 59.306-42.666 73.813v54.187h42.666A298.667 298.667 0 01896 597.333h42.667A42.667 42.667 0 01981.333 640v128a42.667 42.667 0 01-42.666 42.667H896v42.666a85.333 85.333 0 01-85.333 85.334H213.333A85.333 85.333 0 01128 853.333v-42.666H85.333A42.667 42.667 0 0142.667 768V640a42.667 42.667 0 0142.666-42.667H128a298.667 298.667 0 01298.667-298.666h42.666V244.48c-25.6-14.507-42.666-42.24-42.666-73.813A85.333 85.333 0 01512 85.333M320 554.667a106.667 106.667 0 00-106.667 106.666A106.667 106.667 0 00320 768a106.667 106.667 0 00106.667-106.667A106.667 106.667 0 00320 554.667m384 0a106.667 106.667 0 00-106.667 106.666A106.667 106.667 0 00704 768a106.667 106.667 0 00106.667-106.667A106.667 106.667 0 00704 554.667z" />
    </svg>
  )
}

export default memo(Bot)