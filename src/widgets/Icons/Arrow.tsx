import { memo, SVGProps } from 'react'

const Arrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1408 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={275}
      height={200}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M561.984 137.344a61.056 61.056 0 00-85.76-86.848L51.04 470.464a61.056 61.056 0 00-.256 86.592L475.968 982.24a61.056 61.056 0 0086.336-86.336l-381.76-381.76 381.472-376.8z" />
      <path d="M93.92 577.504h1230.048a61.024 61.024 0 000-122.048H93.92a61.024 61.024 0 000 122.048z" />
    </svg>
  )
}

export default memo(Arrow)
