import { memo, SVGProps } from 'react'

const Comment = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M512 64C229.2 64 0 250.2 0 480c0 99.2 42.8 190 114 261.4C89 842.2 5.4 932 4.4 933c-4.4 4.6-5.6 11.4-3 17.4S9.6 960 16 960c132.6 0 232-63.6 281.2-102.8 65.4 24.6 138 38.8 214.8 38.8 282.8 0 512-186.2 512-416S794.8 64 512 64z" />
    </svg>
  )
}

export default memo(Comment)
