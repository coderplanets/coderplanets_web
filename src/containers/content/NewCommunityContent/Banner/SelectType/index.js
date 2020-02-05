/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { ArrowButton } from '@components/FancyButtons'

import TypeBoxes from './TypeBoxes'

import {
  Wrapper,
  IntroTitle,
  AddNewIcon,
  NextBtn,
} from '../../styles/banner/select_type'

import { nextStep } from '../../logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const SelectType = ({ status: { communityType } }) => {
  return (
    <Wrapper>
      <IntroTitle>
        <AddNewIcon src={`${ICON_CMD}/community_new.svg`} />
        你想创建一个什么类型的社区?
      </IntroTitle>
      <TypeBoxes communityType={communityType} />

      {communityType && (
        <NextBtn>
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </NextBtn>
      )}
    </Wrapper>
  )
}

export default SelectType
