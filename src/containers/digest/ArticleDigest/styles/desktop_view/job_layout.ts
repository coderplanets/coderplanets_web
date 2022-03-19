import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import LaptopSVG from '@/icons/Laptop'

export {
  Main,
  Header,
  PublishDateInfo,
  Title,
  BottomInfo,
  CommunityInfo,
} from './post_layout'

export const CompanyWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const LaptopIcon = styled(LaptopSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 4px;
`
export const CompanyName = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleTitle')};
`
