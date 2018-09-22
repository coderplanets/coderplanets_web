/*
 *
 * Navigator
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'

import {
  Breadcrumbs,
  Logo,
  LogoText,
  BetaLogo,
  SiteMapWrapper,
  ShortAddr,
  ShortDesc,
  DotDivider,
  SiteLink,
} from './style'
import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = () => (
  <Breadcrumbs>
    <Logo src={`${ICON_CMD}/keyboard_logo.svg`} />
    <Popover
      placement="bottom"
      trigger="hover"
      content={
        <ShortAddr>
          <ShortDesc>暗号: https://</ShortDesc>
          cps.fun
        </ShortAddr>
      }
    >
      <LogoText>coderplanets</LogoText>
    </Popover>
    <BetaLogo src={`${ICON_CMD}/beta.svg`} />
    <SiteMapWrapper>
      <SiteLink>首页</SiteLink>
      <DotDivider />
      <SiteLink>社区</SiteLink>
    </SiteMapWrapper>
  </Breadcrumbs>
)

/*
   Navigator.propTypes = {
   // https://www.npmjs.com/package/prop-types
   }

   Navigator.defaultProps = {}
 */

export default Navigator
