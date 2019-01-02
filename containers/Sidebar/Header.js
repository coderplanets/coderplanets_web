import React from 'react'

import { ICON_CMD, ICON_BASE } from '../../config'
import { Button } from '../../components'

import {
  Wrapper,
  HeaderFuncs,
  SiteLogoWrapper,
  ExploreWrapper,
  ExploreContent,
  ExploreIcon,
  ExploreText,
  SiteLogo,
} from './styles/header'

import PinButton from './PinButton'

const Header = ({ pin }) => (
  <Wrapper pin={pin}>
    <HeaderFuncs>
      <SiteLogoWrapper pin={pin}>
        <SiteLogo src={`${ICON_BASE}/sidebar/everyday.svg`} />
      </SiteLogoWrapper>
      <ExploreWrapper pin={pin}>
        <a href="/communities">
          <Button size="small" type="primary" ghost>
            <ExploreContent>
              <ExploreIcon src={`${ICON_CMD}/telescope.svg`} />
              <ExploreText>Explore</ExploreText>
            </ExploreContent>
          </Button>
        </a>
      </ExploreWrapper>
    </HeaderFuncs>
    <PinButton pin={pin} />
  </Wrapper>
)

export default Header
