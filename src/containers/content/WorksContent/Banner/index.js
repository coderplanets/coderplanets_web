/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'
import { DropdownButton } from '@/components/Buttons'

import Backgrounds from './Backgrounds'
import Recommendation from './Recommendation'

import {
  Wrapper,
  IntroWrapper,
  BrandWrapper,
  Title,
  Desc,
  PubButton,
  GradientMask,
} from '../styles/banner'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const options = [
  {
    key: '0',
    icon: `${ICON_CMD}/common_check.svg`,
    title: '发布作品',
    desc: '像世界分享你的创意 ..',
  },
  {
    key: '1',
    icon: `${ICON_CMD}/common_link.svg`,
    title: '发布限制',
    desc: '原则上不欢迎此类内容',
  },
]

const Banner = () => {
  return (
    <Wrapper testId="worksContent">
      <IntroWrapper>
        <BrandWrapper>
          <Title>作品集市</Title>
          <Desc>
            <div>有趣有爱的作品跳蚤集市 -- By makers, for makers</div>
          </Desc>
          <PubButton>
            <DropdownButton
              type="primary"
              options={options}
              onClick={(key) => {
                console.log('fuck key: ', key)
              }}
            >
              发布作品
            </DropdownButton>
          </PubButton>
        </BrandWrapper>
        <Recommendation />
        <Backgrounds />
      </IntroWrapper>
      <GradientMask />
    </Wrapper>
  )
}

export default Banner
