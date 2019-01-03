import React from 'react'
import R from 'ramda'
// import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import { Popover } from '../../components'

import {
  Wrapper,
  Selector,
  CheckIcon,
  CheckText,
  ReprintIcon,
  ReprintWrapper,
  CopyRightText,
  MoreIcon,
} from './styles/copyright_selector'

import { THREAD } from '../../utils'
import { inputOnChange } from './logic'

const FullOptions = [
  {
    title: '原创',
    value: 'original',
  },
  {
    title: '转载',
    value: 'reprint',
  },
  {
    title: '翻译',
    value: 'translate',
  },
]

const getOptions = thread => {
  switch (thread) {
    case THREAD.JOB: {
      return R.reject(o => o.value === 'translate', FullOptions)
    }
    default:
      return FullOptions
  }
}

const getCpTitle = cptype =>
  R.path(['title'], R.find(R.propEq('value', cptype), FullOptions))

const CopyrightContent = ({ active, thread }) => (
  <Wrapper>
    {getOptions(thread).map(opt => (
      <Selector
        key={opt.value}
        onClick={inputOnChange.bind(this, 'copyRight', opt.value)}
      >
        <CheckText>{opt.title}</CheckText>
        <CheckIcon
          src={`${ICON_CMD}/check2.svg`}
          active={active === opt.value}
        />
      </Selector>
    ))}
  </Wrapper>
)

const CopyrightSelector = ({ copyRight, thread }) => (
  <Popover
    content={<CopyrightContent active={copyRight} thread={thread} />}
    placement="right"
    trigger="hover"
  >
    <ReprintWrapper>
      <ReprintIcon src={`${ICON_CMD}/${copyRight}.svg`} />
      <CopyRightText>{getCpTitle(copyRight)}</CopyRightText>
      <MoreIcon src={`${ICON_CMD}/more.svg`} />
    </ReprintWrapper>
  </Popover>
)

export default CopyrightSelector
