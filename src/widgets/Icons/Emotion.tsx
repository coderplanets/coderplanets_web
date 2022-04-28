import { memo, SVGProps } from 'react'

const Emotion = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 938.667C276.352 938.667 85.333 747.648 85.333 512S276.352 85.333 512 85.333 938.667 276.352 938.667 512 747.648 938.667 512 938.667zm0-85.334a341.333 341.333 0 1 0 0-682.666 341.333 341.333 0 0 0 0 682.666zM341.333 554.667h341.334a170.667 170.667 0 1 1-341.334 0zm0-85.334a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm341.334 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z" />
    </svg>
  )
}

export default memo(Emotion)
