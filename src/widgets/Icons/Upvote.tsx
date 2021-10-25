import { memo, SVGProps } from 'react'

const Upvote = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M2.88 18.054a35.897 35.897 0 018.531-16.32.8.8 0 011.178 0c.166.18.304.332.413.455a35.897 35.897 0 018.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 01-.894 0l-2.089-4.178a44.019 44.019 0 01-6.584-.874zM12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  )
}

export default memo(Upvote)
