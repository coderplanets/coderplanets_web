import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import WipSVG from '@/icons/Wip'

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 60px;
  padding-top: 40px;

  ${css.media.mobile`
    padding-left: 15px;
    padding-right: 15px;
  `};
`
export const WipIcon = styled(WipSVG)`
  ${css.size(80)};
  fill: ${theme('thread.articleDigest')};
  margin-bottom: 20px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Ul = styled.ul`
  list-style: disc;
  color: ${theme('thread.articleDigest')};
  margin-left: 18px;
`
export const Li = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
  font-size: 14px;
`
export const InnerLinker = styled.div`
  ${css.flex('align-center')};
`
