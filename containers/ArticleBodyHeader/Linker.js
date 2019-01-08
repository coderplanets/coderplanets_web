import React from 'react'

// import { ICON_CMD } from '../../config'
import { LinkFrom, LinkSource } from './styles'

const Linker = ({ addr }) => (
  <React.Fragment>
    {addr ? (
      <LinkFrom href={addr} target="_blank" rel="noopener noreferrer">
        <div>原文地址:&nbsp;</div>
        <LinkSource>{addr}</LinkSource>
      </LinkFrom>
    ) : null}
  </React.Fragment>
)

export default Linker
