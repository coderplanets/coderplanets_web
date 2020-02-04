/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { ArrowButton } from '@components/FanceButtons'

// import SearchBox from './SearchBox'

import {
  IntroWraper,
  IntroTitle,
  AddNewIcon,
  NextBtn,
} from '../../styles/banner/select_type'

import TypeBoxes from './TypeBoxes'
// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const SelectType = ({ communityType }) => {
  return (
    <IntroWraper>
      <IntroTitle>
        <AddNewIcon src={`${ICON_CMD}/community_new.svg`} />
        你想创建一个什么类型的社区?
      </IntroTitle>
      <TypeBoxes communityType={communityType} />

      {communityType && (
        <NextBtn>
          <ArrowButton size="large">下一步</ArrowButton>
        </NextBtn>
      )}
    </IntroWraper>
  )
}

export default SelectType
