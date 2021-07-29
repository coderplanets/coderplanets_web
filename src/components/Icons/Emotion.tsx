import { memo, SVGProps } from 'react'

const Emotion = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm2-12v4h2v-4h-2zm-6 0v4h2v-4H8z" />
    </svg>
  )
}

export default memo(Emotion)
