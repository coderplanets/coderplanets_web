import { memo, SVGProps } from 'react'

const Emoji = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M746.667 512a234.667 234.667 0 1 1 0 469.333 234.667 234.667 0 0 1 0-469.333zM512 85.29c235.69 0 426.752 191.062 426.752 426.753 0 11.221-.427 22.357-1.28 33.365a277.419 277.419 0 0 0-464.213 154.71 191.445 191.445 0 0 1-112.214-69.334 32 32 0 0 0-50.304 39.595 255.701 255.701 0 0 0 159.147 94.293c4.267 66.73 32.213 127.147 75.52 172.8a432.944 432.944 0 0 1-33.408 1.28c-235.69 0-426.752-191.061-426.752-426.71 0-235.69 191.061-426.794 426.752-426.794zm234.667 512-3.84.342a21.333 21.333 0 0 0-17.152 17.152l-.342 3.883v106.666H618.581l-3.84.342a21.333 21.333 0 0 0-17.152 17.152l-.341 3.84.341 3.84a21.333 21.333 0 0 0 17.152 17.152l3.84.341h106.752v106.795l.342 3.84a21.333 21.333 0 0 0 17.152 17.152l3.84.341 3.84-.341a21.333 21.333 0 0 0 17.152-17.152l.341-3.84V768l106.795.043 3.84-.342a21.333 21.333 0 0 0 17.152-17.152l.384-3.84-.342-3.84a21.333 21.333 0 0 0-17.194-17.152l-3.84-.341H768V618.709l-.341-3.84a21.333 21.333 0 0 0-17.152-17.194l-3.84-.342zM384 373.377A53.333 53.333 0 1 0 384 480a53.333 53.333 0 0 0 0-106.667zm256 0A53.333 53.333 0 1 0 640 480a53.333 53.333 0 0 0 0-106.624z" />
    </svg>
  )
}

export default memo(Emoji)