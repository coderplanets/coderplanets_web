import React from 'react'

// import { ICON_CMD } from '../../config'
import { Wrapper, Link } from './styles/copyright_header'
import { nilOrEmpty, cutFrom } from '../../utils'

const CopyrightHeader = ({ data: { linkAddr } }) => (
  <React.Fragment>
    {!nilOrEmpty(linkAddr) ? (
      <Wrapper>
        <div>
          原文地址:{' '}
          <Link href={linkAddr} rel="noopener noreferrer" target="_blank">
            {cutFrom(linkAddr, 40)}
          </Link>
        </div>
      </Wrapper>
    ) : null}
  </React.Fragment>
)

export default CopyrightHeader
