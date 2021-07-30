import { memo, SVGProps } from 'react'

const Question = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M512 102.4c-225.28 0-409.6 184.32-409.6 409.6S286.72 921.6 512 921.6 921.6 737.28 921.6 512 737.28 102.4 512 102.4zM563.2 768H460.8V665.6h102.4V768zm0-204.8H460.8v-10.24c0-40.96 15.36-76.8 51.2-92.16 20.48-10.24 51.2-30.72 51.2-51.2 0-25.6-25.6-51.2-51.2-51.2s-51.2 25.6-51.2 51.2H358.4c0-87.04 66.56-153.6 153.6-153.6s153.6 51.2 153.6 153.6-102.4 112.64-102.4 153.6z" />
    </svg>
  )
}

export default memo(Question)
