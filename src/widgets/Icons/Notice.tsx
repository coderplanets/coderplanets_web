import { memo, SVGProps } from 'react'

const Notice = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M936.96 800L567.68 160a64 64 0 00-111.36 0L87.04 800a64 64 0 0055.68 96h738.56a64 64 0 0055.68-96zM464 400a48 48 0 0196 0v192a48 48 0 01-96 0zm48 424.32A56.32 56.32 0 11568.32 768 56.96 56.96 0 01512 824.32z" />
    </svg>
  )
}

export default memo(Notice)
