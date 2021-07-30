import { memo, SVGProps } from 'react'

const View = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M512 874.667C252.8 874.667 42.667 711.893 42.667 512S252.8 149.333 512 149.333 981.333 312.107 981.333 512 771.2 874.667 512 874.667zm0-640c-212.267 0-384 124.373-384 277.333s172.587 277.333 384 277.333S896 664.96 896 512 725.333 234.667 512 234.667z" />
      <path d="M320 512a192 192 0 10384 0 192 192 0 10-384 0z" />
      <path d="M512 405.333A106.667 106.667 0 11405.333 512 106.667 106.667 0 01512 405.333M512 320a192 192 0 10192 192 192 192 0 00-192-192z" />
    </svg>
  )
}

export default memo(View)
