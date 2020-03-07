import styled from 'styled-components'

import Img from '@Img'
import {
  IntroBase,
  IntroHeadBase,
  TitleBase,
  FooterBase,
  FlagIconBase,
} from './index'
// import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
export const Masonry = styled.div`
  transition: all 0.5s ease-in-out;
  column-fill: initial;

  /** .masonry.bordered */
  column-rule: 1px solid;
  column-rule-color: #08485a;
  column-gap: 25px;

  /** media */
  column-count: 3;
`
export const Brick = styled.div`
  margin-bottom: 25px;
  display: inline-block; /* Fix the misalignment of items */
  vertical-align: top; /* Keep the item on the very top */

  /** .masonry.bordered  .brick*/
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  border-color: #08485a;
`

export const Image = styled(Img)`
  border-radius: 2px;
  max-width: 100%;
  vertical-align: middle;
  /** */
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden; /* Remove Image flickering on hover */
`

//

export const Intro = styled(IntroBase)`
  padding-top: 16px;
  padding-bottom: 0;
`
export const IntroHead = styled(IntroHeadBase)``
export const Title = styled(TitleBase)`
  font-size: 15px;
`
export const Footer = styled(FooterBase)``
export const FlagIcon = styled(FlagIconBase)`
  width: 18px;
`
