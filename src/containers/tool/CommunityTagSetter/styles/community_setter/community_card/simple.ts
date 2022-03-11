import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div<{ withHover: boolean }>`
  ${css.flex('align-center')};
  width: auto;
  height: 30px;
  background: ${theme('modal.bg')};
  margin-bottom: 15px;
  margin-right: 10px;
  border: ${({ withHover }) => (withHover ? '1px solid' : 'none')};
  border-color: transparent;
  border-radius: 10px;
  padding: 3px 6px;
  padding-right: 2px;

  &:hover {
    cursor: pointer;
    border-color: #0c516e;
  }
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(15)};
`
export const Intro = styled.div`
  flex-grow: 1;
  margin-left: 8px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Name = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
`
export const Digest = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const CheckWrapper = styled.div`
  margin-left: 12px;
`
