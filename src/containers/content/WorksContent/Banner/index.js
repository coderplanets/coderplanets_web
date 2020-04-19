/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { ASSETS_ENDPOINT } from '@config'
import { buildLog } from '@utils'

import { Button } from '@components/Buttons'

import Recommendation from './Recommendation'

import {
  Wrapper,
  IntroWrapper,
  BrandWrapper,
  Title,
  Desc,
  PubButton,
  GradientMask,
  CoverImg,
} from '../styles/banner'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const Banner = () => {
  return (
    <Wrapper testid="worksContent">
      <IntroWrapper>
        <BrandWrapper>
          <Title>作品集市</Title>
          <Desc>
            <div>有趣有爱的作品跳蚤集市 - By makers, for makers</div>
          </Desc>
          <PubButton>
            <Button type="primary">发布作品</Button>
          </PubButton>
        </BrandWrapper>
        <Recommendation />
      </IntroWrapper>
      <CoverImg src={`${ASSETS_ENDPOINT}/works/space-background.svg`} />
      <GradientMask />
    </Wrapper>
  )
}

export default Banner
