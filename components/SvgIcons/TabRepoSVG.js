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
    <path d="M384 576h-64v-64h64v64zm0-192h-64v64h64v-64zm0-128h-64v64h64v-64zm0-128h-64v64h64v-64zm512-64v768c0 35.2-28.8 64-64 64H512v128l-96-96-96 96V896H192c-35.2 0-64-28.8-64-64V64c0-35.2 28.8-64 64-64h640c35.2 0 64 28.8 64 64zm-64 640H192v128h128v-64h192v64h320V704zm0-640H256v576h576V64z" />
  </svg>
)

export default SvgComponent
