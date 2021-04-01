import React from 'react'

// import { ICON_CMD } from '@/config'
import { cutRest } from '@/utils'
import { LinkFrom, LinkSource } from './styles'

const Linker = ({ addr }) => (
  <>
    {addr && (
      <LinkFrom href={addr} target="_blank" rel="noopener noreferrer">
        <div>原文地址:&nbsp;</div>
        <LinkSource>{cutRest(addr, 30)}</LinkSource>
      </LinkFrom>
    )}
  </>
)

export default React.memo(Linker)
