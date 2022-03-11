import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div<{ withHover: boolean }>`
  ${css.flex()};
  width: 235px;
  height: 80px;
  background: ${theme('modal.bg')};
  margin-bottom: 15px;
  margin-right: 10px;
  border: ${({ withHover }) => (withHover ? '1px solid' : 'none')};
  border-color: transparent;
  border-radius: 10px;
  padding: 10px;
  padding-right: 2px;

  &:hover {
    cursor: pointer;
    border-color: #0c516e;
  }
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(30)};
  margin-top: 5px;
  border-radius: 5px;
`
export const Intro = styled.div`
  flex-grow: 1;
  margin-left: 15px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Name = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
`
export const Raw = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  position: relative;
  padding-left: 5px;

  &:before {
    content: '/';
    position: absolute;
    top: 1px;
    left: 0;
    font-size: 11px;
    margin-right: 2px;
  }
`
export const Digest = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const CheckWrapper = styled.div`
  margin-left: 12px;
`
