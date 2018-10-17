import React from 'react'

import { ICON_CMD } from '../../config'
import { Button } from '../../components'

import {
  Wrapper,
  HeaderFuncs,
  SiteLogoWrapper,
  ExploreWrapper,
  ExploreContent,
  ExploreIcon,
  ExploreText,
} from './styles/header'

import PinButton from './PinButton'

const Header = ({ pin }) => (
  <Wrapper pin={pin}>
    <HeaderFuncs>
      <SiteLogoWrapper pin={pin}>
        CPS
        {/* <SiteLogo src={`${ICON_CMD}/keyboard_logo.svg`} /> */}
      </SiteLogoWrapper>
      <ExploreWrapper pin={pin}>
        <Button size="small" type="primary" ghost>
          <ExploreContent>
            <ExploreIcon src={`${ICON_CMD}/telescope.svg`} />
            <ExploreText>Explore</ExploreText>
          </ExploreContent>
        </Button>
      </ExploreWrapper>
    </HeaderFuncs>
    <PinButton pin={pin} />
  </Wrapper>
)

export default Header
