import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  position: relative;
  margin-bottom: 50px;
`
export const WorksWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%%;
`
// export const PublishDateInfo = styled.div`
//   font-size: 12px;
//   color: ${theme('thread.articleDigest')};
// `
export const Avatar = styled.img`
  ${css.circle(25)};
  margin-right: 5px;
`
export const Intro = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-left: 16px;
`
export const Cover = styled(Img)`
  ${css.size(45)};
  border-radius: 4px;
`
export const Title = styled.div`
  ${css.cutRest('180px')};
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 2px;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('300px')};
`
export const TabsWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  position: absolute;
  width: 100%;
  bottom: -65px;
  left: -3px;
`
