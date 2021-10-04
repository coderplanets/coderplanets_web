import { memo, SVGProps } from 'react'

const ArrowSolid = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1365 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={266.602}
      height={200}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M335.052 100.606v804.147c0 16.222 8.575 30.127 26.187 41.019 34.762 27.114 70.914 27.114 108.456 0l538.802-402.074a49.593 49.593 0 000-82.037L469.695 59.587c-37.542-27.114-78.097-27.114-112.859 0a49.593 49.593 0 00-21.784 41.019z" />
    </svg>
  )
}

export default memo(ArrowSolid)
