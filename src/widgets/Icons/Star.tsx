import { memo, SVGProps } from 'react'

const Star = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M621.1 543.4l119.6-63.7-140.6-74.9-88.3-312.6-88.4 313-140.1 74.7 118.3 63 109.8 388.9z" />
      <path d="M511.4 960.2l-116.3-412-128.2-68.3 150-79.9 94.9-336.1 94.8 335.7 150.5 80.2-129.5 69-116.2 411.4zM299.7 479.9l108.4 57.8.9 3.2 102.4 362.6 103.1-365.2 109.7-58.4L593.5 410l-81.7-289.4L430 410.5l-130.3 69.4z" />
    </svg>
  )
}

export default memo(Star)
