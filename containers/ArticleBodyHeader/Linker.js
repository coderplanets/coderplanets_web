import React from 'react'

// import { ICON_CMD } from '../../config'
import { LinkFrom, LinkSource } from './styles'
import { cutFrom } from '../../utils'

const Linker = ({ addr }) => (
  <React.Fragment>
    {addr ? (
      <LinkFrom href={addr} target="_blank" rel="noopener noreferrer">
        <div>原文地址:&nbsp;</div>
        <LinkSource>{cutFrom(addr, 30)}</LinkSource>
      </LinkFrom>
    ) : null}
  </React.Fragment>
)

export default Linker
