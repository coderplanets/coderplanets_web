import styled from 'styled-components'

import Img from '@Img'
// import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 1.5em;
  padding-left: 1.5em;
  width: 100%;
`
export const Masonry = styled.div`
  transition: all 0.5s ease-in-out;
  column-gap: 30px;
  column-fill: initial;
  border: 1px solid tomato;

  /** .masonry.bordered */
  column-rule: 1px solid #eee;
  column-gap: 50px;

  /** media */
  column-count: 3;
`
export const Brick = styled.div`
  margin-bottom: 30px;
  display: inline-block; /* Fix the misalignment of items */
  vertical-align: top; /* Keep the item on the very top */

  /** .masonry.bordered  .brick*/
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid;
  border-color: #116480;
`

export const Image = styled(Img)`
  max-width: 100%;
  vertical-align: middle;
  /** */
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden; /* Remove Image flickering on hover */
`
