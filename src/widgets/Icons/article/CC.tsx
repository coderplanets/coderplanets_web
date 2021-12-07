import { memo, SVGProps } from 'react'

const SVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M505.446 20.53C233.984 24.164 16.896 247.14 20.53 518.552s226.61 488.55 498.074 484.916c271.412-3.584 488.55-226.61 484.914-498.074-3.634-271.412-226.714-488.5-498.074-484.864zm11.726 879.464c-214.322 2.918-390.348-168.5-393.216-382.822-2.868-214.322 168.55-390.348 382.874-393.216 214.272-2.868 390.298 168.55 393.166 382.822s-168.5 390.298-382.822 393.216zM391.73 595.302c-20.736 0-36.454-7.578-47.104-22.732-10.702-15.154-15.974-35.328-15.974-60.57 0-55.5 21.044-83.252 63.078-83.252 8.396 0 17.51 2.816 27.342 8.396 9.778 5.632 18.074 15.462 24.832 29.44l63.026-32.82c-25.19-45.414-67.022-68.146-125.338-68.146-39.834 0-72.704 13.158-98.816 39.526-26.06 26.368-39.116 62.002-39.116 106.854 0 45.978 12.902 81.92 38.708 107.726 25.754 25.804 59.75 38.706 101.786 38.706 26.318 0 50.432-6.606 72.294-19.814s39.014-31.284 51.354-54.322l-58.06-29.44c-11.214 26.932-30.566 40.448-58.01 40.448zm271.668 0c-20.788 0-36.506-7.578-47.104-22.732-10.702-15.104-15.974-35.328-15.974-60.57 0-55.5 20.992-83.252 63.078-83.252 9.01 0 18.38 2.816 28.212 8.396 9.778 5.632 18.126 15.462 24.78 29.44l62.208-32.82c-24.678-45.414-66.1-68.146-124.518-68.146-39.782 0-72.704 13.158-98.764 39.526-26.112 26.368-39.116 61.952-39.116 106.802 0 45.978 12.75 81.92 38.246 107.724 25.548 25.804 59.648 38.706 102.246 38.706 25.804 0 49.614-6.606 71.476-19.814 21.812-13.21 39.22-31.284 52.122-54.322l-58.88-29.44c-11.212 26.982-30.514 40.5-58.01 40.5z" />
    </svg>
  )
}

export default memo(SVG)
