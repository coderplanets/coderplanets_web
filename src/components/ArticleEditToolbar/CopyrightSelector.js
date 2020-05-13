import React from 'react'
import R from 'ramda'
// import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'

import Tooltip from '@/components/Tooltip'

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
    case THREAD.JOB:
      return R.reject(o => o.value === 'translate', FullOptions)

    case THREAD.RADAR:
      return R.reject(o => o.value === 'original', FullOptions)

    default:
      return FullOptions
  }
}

const getCpTitle = cptype =>
  R.path(['title'], R.find(R.propEq('value', cptype), FullOptions))

const CopyrightContent = ({ active, thread, onCopyrightChange }) => (
  <Wrapper>
    {getOptions(thread).map(opt => (
      <Selector
        key={opt.value}
        onClick={onCopyrightChange.bind(this, opt.value)}
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

const CopyrightSelector = ({ copyRight, thread, onCopyrightChange }) => {
  return (
    <Tooltip
      content={
        <CopyrightContent
          active={copyRight}
          thread={thread}
          onCopyrightChange={onCopyrightChange}
        />
      }
      placement="right"
      trigger="click"
    >
      <ReprintWrapper>
        <ReprintIcon src={`${ICON_CMD}/${copyRight}.svg`} />
        <CopyRightText>{getCpTitle(copyRight)}</CopyRightText>
        <MoreIcon src={`${ICON_CMD}/more.svg`} />
      </ReprintWrapper>
    </Tooltip>
  )
}

export default React.memo(CopyrightSelector)
