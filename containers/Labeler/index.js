/*
 *
 * Labeler
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import { LABEL_POOL } from '@config'
import { makeDebugger, storePlug, uid } from '@utils'

import withGuardian from '@components/HOC/withGuardian'
import Maybe from '@components/Maybe'
import Popover from '@components/Popover'
import Options from './Options'
import Selected from './Selected'

import { Wrapper, LabelItem, LabelIcon, Title, PopHint } from './styles'
import { useInit, onVisibleChange, onTagSelect } from './logic'

/* eslint-disable-next-line */
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
  useInit(labeler, uniqId, options)

  /* const { tagsData, popVisible, selectedData, labelEntriesData } = labeler */
  const { labelEntriesData } = labeler
  const targetIndex = R.findIndex(R.propEq('uniqId', uniqId))(labelEntriesData)

  const { tags, popVisible, selected: selectedOnes } =
    labelEntriesData[targetIndex] || {}
  const tagsList = R.reject(t => t.title === 'refined', tags)

  const callbacks = { onTagSelectCb, onTagUnselectCb }

  return (
    <Wrapper>
      <Maybe test={readOnly}>
        <Popover
          content={<PopHint>{trans[label]}</PopHint>}
          placement="bottom"
          trigger="hover"
        >
          <LabelItem>
            <LabelIcon src={LABEL_POOL[label].iconSrc} />
            <Title>
              <Selected items={selectedOnes} readOnly={readOnly} />
            </Title>
          </LabelItem>
        </Popover>
      </Maybe>
      <Maybe test={!readOnly}>
        {targetIndex >= 0 ? (
          <Popover
            content={
              <Options
                label={label}
                items={tagsList}
                selected={selectedOnes}
                onOptionSelect={onTagSelect(uniqId, selected, callbacks)}
              />
            }
            placement="right"
            trigger="click"
            visible={popVisible}
            onVisibleChange={onVisibleChange(uniqId)}
          >
            <LabelItem>
              <LabelIcon src={LABEL_POOL[label].iconSrc} />
              <Title>
                {trans[label]}
                <Selected items={selectedOnes} readOnly={readOnly} />
              </Title>
            </LabelItem>
          </Popover>
        ) : (
          <div />
        )}
      </Maybe>
    </Wrapper>
  )
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

export default withGuardian(
  inject(storePlug('labeler'))(observer(LabelerContainer))
)
