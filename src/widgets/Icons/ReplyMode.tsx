import { memo, SVGProps } from 'react'

const ReplyMode = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M261.916 475.705H574.18v63.545H261.916z" />
      <path d="M272.782 962.105a31.744 31.744 0 01-31.744-31.801V246.158a31.744 31.744 0 1163.488 0v684.146a31.744 31.744 0 01-31.744 31.8z" />
      <path d="M391.737 318.236H174.08a125.156 125.156 0 010-250.31h217.657a125.156 125.156 0 110 250.31zM859.648 632.604H641.934a125.156 125.156 0 010-250.31h217.714a125.156 125.156 0 010 250.31zM261.916 803.84H574.18v63.545H261.916z" />
      <path d="M859.648 954.084H641.934a125.156 125.156 0 010-250.312h217.714a125.156 125.156 0 010 250.312z" />
    </svg>
  )
}

export default memo(ReplyMode)
