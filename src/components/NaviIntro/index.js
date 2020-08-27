/*
 *
 * NaviIntro
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { Wrapper, Logo, Digest, Title, Desc } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviIntro:index')

const NaviIntro = ({ title, desc, iconSrc, testId }) => {
  return (
    <Wrapper testId={testId}>
      <Logo src={iconSrc} />
      <Digest>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Digest>
    </Wrapper>
  )
}

NaviIntro.propTypes = {
  title: T.string.isRequired,
  desc: T.string.isRequired,
  iconSrc: T.string.isRequired,
  testId: T.string,
}

NaviIntro.defaultProps = {
  testId: 'navi-intro',
}

export default React.memo(NaviIntro)
