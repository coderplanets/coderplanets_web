import styled from 'styled-components'

import type { TLink } from '@/spec'
import { theme } from '@/utils/css'

export const Wrapper = styled.div`
  margin-bottom: 25px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  margin-bottom: 10px;
`
export const PostLink = styled.a<TLink>`
  color: ${theme('banner.desc')};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const ContactsWrapper = styled.div`
  margin-top: 8px;
`
export const ContactItem = styled.div`
  margin-bottom: 4px;
`
