import { memo, SVGProps } from 'react'

const Expand = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M783.915 1009.032L512.017 731.416l-271.93 277.551a49.215 49.215 0 01-70.753 0 51.78 51.78 0 010-72.246l307.274-313.707a49.28 49.28 0 0170.785 0l307.34 313.707a51.976 51.976 0 010 72.311 49.41 49.41 0 01-70.818 0zM476.608 400.98L169.27 87.274a51.976 51.976 0 010-72.311 49.41 49.41 0 0170.817 0l271.93 277.615L783.85 14.963a49.41 49.41 0 0170.817 0 51.976 51.976 0 010 72.311L547.327 400.98a49.377 49.377 0 01-70.719 0z" />
    </svg>
  )
}

export default memo(Expand)
