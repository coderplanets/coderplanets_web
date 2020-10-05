import React from 'react'

import { ICON_CMD, ICON_BASE } from '@/config'

import PinButton from './PinButton'

import {
  Wrapper,
  InnerWrapper,
  HeaderFuncs,
  SiteLogoWrapper,
  SearchWrapper,
  SearchContent,
  SearchInput,
  SearchIcon,
  SiteLogo,
} from './styles/header'
import { searchOnFocus, searchCommunityValueOnChange } from './logic'

const Header = ({ pin, searchCommunityValue }) => (
  <Wrapper pin={pin}>
    <InnerWrapper>
      <HeaderFuncs>
        <SiteLogoWrapper pin={pin}>
          <SiteLogo src={`${ICON_BASE}/sidebar/everyday.svg`} />
        </SiteLogoWrapper>
        <SearchWrapper pin={pin}>
          <SearchContent>
            <SearchIcon src={`${ICON_CMD}/search.svg`} />
            <SearchInput
              value={searchCommunityValue}
              onChange={(e) => searchCommunityValueOnChange(e)}
              placeholder="订阅的社区"
              onFocus={searchOnFocus}
            />
          </SearchContent>
        </SearchWrapper>
      </HeaderFuncs>
      <PinButton pin={pin} />
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(Header)
