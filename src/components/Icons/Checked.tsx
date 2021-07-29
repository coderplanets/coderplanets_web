import { memo, SVGProps } from 'react'

const Checked = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M853.333 256L384 725.333 170.667 512" />
    </svg>
  )
}

export default memo(Checked)
