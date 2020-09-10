import React from 'react'
import { ICON_CMD } from '@/config'

// import { ICON_CMD } from '../../config'
import { Wrapper, SiteLogo, Desc } from '../styles/content/default_content'

const DefaultContent = () => (
  <Wrapper>
    <SiteLogo src={`${ICON_CMD}/barcelona.png`} />
    <Desc>Take the Ball, Pass the Ball</Desc>
  </Wrapper>
)

export default React.memo(DefaultContent)
