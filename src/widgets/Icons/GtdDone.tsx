import { memo, SVGProps } from 'react'

const Done = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M954.848 323.424q0 22.848-16 38.848L447.424 853.696q-16 16-38.848 16t-38.848-16L85.152 569.12q-16-16-16-38.848t16-38.848l77.728-77.728q16-16 38.848-16t38.848 16l168 168.576 374.848-375.424q16-16 38.848-16t38.848 16l77.728 77.728q16 16 16 38.848z" />
    </svg>
  )
}

export default memo(Done)
