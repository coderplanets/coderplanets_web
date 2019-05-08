import React from 'react'
import { Button } from 'antd'

import { ICON_CMD, ICON_BASE } from '@config'

import PinButton from './PinButton'

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

const Header = ({ pin }) => (
  <Wrapper pin={pin}>
    <HeaderFuncs>
      <SiteLogoWrapper pin={pin}>
        <SiteLogo src={`${ICON_BASE}/sidebar/everyday.svg`} />
      </SiteLogoWrapper>
      <ExploreWrapper pin={pin}>
        <a href="/communities" rel="noopener noreferrer" target="_blank">
          <Button size="small" type="primary" ghost>
            <ExploreContent>
              <ExploreIcon src={`${ICON_CMD}/telescope.svg`} />
              <ExploreText>Explore All</ExploreText>
            </ExploreContent>
          </Button>
        </a>
      </ExploreWrapper>
    </HeaderFuncs>
    <PinButton pin={pin} />
  </Wrapper>
)

export default Header
