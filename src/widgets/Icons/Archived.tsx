import { memo, SVGProps } from 'react'

const Archived = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M128 426.688h768v426.816A42.432 42.432 0 01853.632 896H170.368A42.304 42.304 0 01128 853.504v-426.88zM384 512v85.312h256V512H384zM85.312 170.688c0-23.552 19.456-42.688 42.368-42.688h768.64c23.424 0 42.368 18.944 42.368 42.688v170.624H85.312V170.688z" />
    </svg>
  )
}

export default memo(Archived)
