import { memo, SVGProps } from 'react'

const Share = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 110-4.968l5.11-2.787a3.5 3.5 0 11.958 1.755l-5.11 2.787a3.514 3.514 0 010 1.458l5.11 2.787a3.5 3.5 0 11-.958 1.755z" />
    </svg>
  )
}

export default memo(Share)
