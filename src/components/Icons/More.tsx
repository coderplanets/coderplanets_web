import { memo, SVGProps } from 'react'

const More = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M265.1 509.8c-.1 45.5-36.8 82.2-82.4 82.1-45.4-.1-82.3-37-82.2-82.5 0-45.3 37.1-82.2 82.6-82.1 45.4.1 82 36.9 82 82.5zm577-82.4c45.5 0 82.5 36.8 82.5 82.2.1 45.4-36.8 82.4-82.3 82.4-45.6 0-82.4-36.6-82.4-82.2s36.6-82.4 82.2-82.4zM512.4 592c-45.4 0-82.6-37.3-82.4-82.4.3-45.5 37.1-82.2 82.6-82.2 45.4 0 82.5 37.1 82.3 82.4-.1 45.4-37 82.2-82.5 82.2z" />
    </svg>
  )
}

export default memo(More)
