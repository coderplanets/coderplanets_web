/*
 *
 * Labeler
 *
 */

/*
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import { LABEL_POOL } from '@config'
import { connectStore, makeDebugger, storePlug, uid } from '@utils'

import withGuardian from '@components/HOC/withGuardian'
import Maybe from '@components/Maybe'
import Popover from '@components/Popover'
import Options from './Options'
import Selected from './Selected'

import { Wrapper, LabelItem, LabelIcon, Title, PopHint } from './styles'
import { useInit, onVisibleChange, onTagSelect } from './logic'

const debug = makeDebugger('C:Labeler')

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

  debug('uniqId: ', uniqId)
  debug('options: ', options)

  useInit(labeler, '1001', options)
  // useInit(labeler, options)

  const { labelEntriesData } = labeler
  const targetIndex = R.findIndex(R.propEq('uniqId', uniqId))(labelEntriesData)

  const { tags, popVisible, selected: selectedOnes } =
    labelEntriesData[targetIndex] || {}

  debug('targetIndex --> ', targetIndex)
  debug('labelEntriesData -> ', labelEntriesData)
  debug('tags --> : ', tags)

  const tagsList = tags ? R.reject(t => t.title === 'refined', tags) : []

  const callbacks = { onTagSelectCb, onTagUnselectCb }

  return <Wrapper>fjie</Wrapper>
}

LabelerContainer.propTypes = {
  label: PropTypes.oneOf([
    'default',
    'salary',
    'city',
    'exp',
    'education',
    'finance',
    'scale',
    'field',
  ]),
  labeler: PropTypes.any,
  multi: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string),

  onTagSelect: PropTypes.func,
  onTagUnselect: PropTypes.func,
  readOnly: PropTypes.bool,
}

LabelerContainer.defaultProps = {
  label: 'default',
  labeler: {},
  multi: false,
  selected: [],
  readOnly: false,
  onTagSelect: debug,
  onTagUnselect: debug,
}

export default withGuardian(connectStore(LabelerContainer))
*/
