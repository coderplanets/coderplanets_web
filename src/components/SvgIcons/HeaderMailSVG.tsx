import { FC } from 'react'

const SvgComponent: FC = (props) => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M854.624 681.376L666.56 493.344 852 345c13.784-11.064 16.032-31.184 5-45-11.064-13.72-31.128-16.032-45-5L512 535.032 212 295c-13.816-11.032-33.936-8.72-45 5-11.032 13.816-8.784 33.936 5 45l185.408 148.344-188.032 188.032c-12.504 12.504-12.504 32.752 0 45.248C175.624 732.872 183.816 736 192 736s16.376-3.128 22.624-9.376l192-192c.376-.376.504-.872.84-1.248L492 601c5.84 4.656 12.936 7 20 7s14.16-2.344 20-7l84.528-67.624c.344.376.472.872.84 1.248l192 192C815.624 732.872 823.816 736 832 736s16.376-3.128 22.624-9.376c12.504-12.496 12.504-32.752 0-45.248z" />
    <path d="M832 128H192C85.968 128 0 213.968 0 320v384c0 106.032 85.968 192 192 192h640c106.032 0 192-85.968 192-192V320c0-106.032-85.968-192-192-192zm128 576c0 70.592-57.408 128-128 128H192c-70.592 0-128-57.408-128-128V320c0-70.592 57.408-128 128-128h640c70.592 0 128 57.408 128 128v384z" />
  </svg>
)

export default SvgComponent
