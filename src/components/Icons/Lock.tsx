import { memo, SVGProps } from 'react'

const Lock = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M284.448 455.104V341.312a227.552 227.552 0 01455.104 0v113.792h71.104c23.552 0 42.656 19.104 42.656 42.656v369.792c0 23.552-19.104 42.656-42.656 42.656H213.312a42.656 42.656 0 01-42.656-42.656V497.76c0-23.552 19.104-42.656 42.656-42.656h71.104zm85.344 0H654.24V341.312a142.208 142.208 0 00-284.416 0v113.792z" />
    </svg>
  )
}

export default memo(Lock)
