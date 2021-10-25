import { memo, SVGProps } from 'react'

const Thunder = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M668.672 468.053L385.877 833.024c-9.13 9.13-18.261 0-18.261-9.13L422.4 531.967H312.917c-9.13 0-9.13-9.13-9.13-9.13L586.58 157.866c9.131-9.131 18.262 0 18.262 9.13l-45.568 291.926h100.352c9.045 0 9.045 9.13 9.045 9.13z" />
    </svg>
  )
}

export default memo(Thunder)
