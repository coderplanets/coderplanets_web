import React from 'react'

const SvgComponent = props => (
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
    <path d="M638.4 0h-64v128h-128V0h-64v128h-128v428.8L401.6 704h76.8v76.8l128 128V960h-192v-64h-64v128h320V883.2l-128-128V704h80l147.2-147.2V128H638.4V0zm67.2 336L414.4 627.2 363.2 576l342.4-342.4V336zM318.4 531.2V428.8L555.2 192h102.4L318.4 531.2zM465.6 192L318.4 339.2V192h147.2zm131.2 448H491.2l214.4-214.4v105.6L596.8 640z" />
  </svg>
)

export default SvgComponent
