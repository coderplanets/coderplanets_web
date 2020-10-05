/*
 *
 * Labeler
 *
 */

/*
import React, { useState } from 'react'
import T from 'prop-types'
import { inject, observer } from 'mobx-react'
import { findIndex, reject, propEq } from 'ramda'

import { LABEL_POOL } from '@/config'
import { connectStore, buildLog, storePlug, uid } from '@/utils'

import { withGuardian } from '@/hoc'
import Maybe from '@/components/Maybe'
import Tooltip from '@/components/Tooltip'
import Options from './Options'
import Selected from './Selected'

import { Wrapper, LabelItem, LabelIcon, Title, PopHint } from './styles'
import { useInit, onVisibleChange, onTagSelect } from './logic'

const log = buildLog('C:Labeler')

const trans = {
  default: '标签',
  city: '城市',
  salary: '月薪',
  exp: '经验',
  education: '学历',
  finance: '融资',
  scale: '规模',
  field: '领域',
}

const LabelerContainer = ({
  labeler,
  label,
  multi,
  readOnly,
  selected,
  onTagSelect: onTagSelectCb,
  onTagUnselect: onTagUnselectCb,
}) => {
  const [uniqId] = useState(uid.gen())
  const options = { label, multi, selected }

  log('uniqId: ', uniqId)
  log('options: ', options)

  useInit(labeler, '1001', options)
  // useInit(labeler, options)

  const { labelEntriesData } = labeler
  const targetIndex = findIndex(propEq('uniqId', uniqId))(labelEntriesData)

  const { tags, popVisible, selected: selectedOnes } =
    labelEntriesData[targetIndex] || {}

  log('targetIndex --> ', targetIndex)
  log('labelEntriesData -> ', labelEntriesData)
  log('tags --> : ', tags)

  const tagsList = tags ? reject(t => t.title === 'refined', tags) : []

  const callbacks = { onTagSelectCb, onTagUnselectCb }

  return <Wrapper>fjie</Wrapper>
}

LabelerContainer.propTypes = {
  label: T.oneOf([
    'default',
    'salary',
    'city',
    'exp',
    'education',
    'finance',
    'scale',
    'field',
  ]),
  labeler: T.any,
  multi: T.bool,
  selected: T.arrayOf(T.string),

  onTagSelect: T.func,
  onTagUnselect: T.func,
  readOnly: T.bool,
}

LabelerContainer.defaultProps = {
  label: 'default',
  labeler: {},
  multi: false,
  selected: [],
  readOnly: false,
  onTagSelect: log,
  onTagUnselect: log,
}

export default withGuardian(connectStore(LabelerContainer))
*/
