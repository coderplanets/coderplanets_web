import { memo, SVGProps } from 'react'

const Heart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M938.667 362.667A234.667 234.667 0 0 0 704 128a271.36 271.36 0 0 0-192 88.32A271.36 271.36 0 0 0 320 128 234.667 234.667 0 0 0 85.333 362.667c0 167.253 202.667 352 298.667 448l97.28 97.28a32 32 0 0 0 22.613 9.386h16.214a32 32 0 0 0 22.613-9.386l97.28-97.28c96-96 298.667-280.747 298.667-448z" />
    </svg>
  )
}

export default memo(Heart)
