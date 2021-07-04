import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  InnerWrapper,
  HeaderFuncs,
  MenuWrapper,
  SearchWrapper,
  SearchContent,
  SearchInput,
  SearchIcon,
  MenuLogo,
} from './styles/header'
import { searchOnFocus, searchCommunityValueOnChange, setPin } from './logic'

type TProps = {
  pin: boolean
  searchCommunityValue: string
}

const Header: FC<TProps> = ({ pin, searchCommunityValue }) => (
  <Wrapper>
    <InnerWrapper>
      {!pin ? (
        <HeaderFuncs>
          <MenuWrapper onClick={setPin}>
            <MenuLogo src={`${ICON}/sidebar-menu.svg`} pin={pin} />
          </MenuWrapper>
        </HeaderFuncs>
      ) : (
        <HeaderFuncs>
          <SearchWrapper pin={pin}>
            <SearchContent>
              <SearchIcon src={`${ICON}/search.svg`} />
              <SearchInput
                value={searchCommunityValue}
                onChange={(e) => searchCommunityValueOnChange(e)}
                placeholder="订阅的社区"
                onFocus={searchOnFocus}
              />
            </SearchContent>
          </SearchWrapper>
          <MenuWrapper onClick={setPin}>
            <MenuLogo src={`${ICON}/sidebar-menu.svg`} pin={pin} />
          </MenuWrapper>
        </HeaderFuncs>
      )}
    </InnerWrapper>
  </Wrapper>
)

export default memo(Header)
