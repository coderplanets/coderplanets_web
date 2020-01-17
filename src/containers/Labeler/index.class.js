/*
 *
 * Labeler
 *
 */

import React from 'react'
import T from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import LABEL_POOL from '@config/label_pool'
import { buildLog, storePlug, uid, Trans } from '@utils'
import { withGuardian } from '@hoc'

import Maybe from '@components/Maybe'
import Popover from '@components/Popover'

import Options from './Options'
import Selected from './Selected'
import { Wrapper, LabelItem, LabelIcon, Title, PopHint } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Labeler')

class LabelerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { uniqId: uid.gen() }

    const { labeler, label, multi, selected } = props
    const { uniqId } = this.state

    const options = { label, multi, selected }
    logic.init(labeler, uniqId, options)
  }

  componentWillUnmount() {
    const { uniqId } = this.state
    logic.uninit(uniqId)
  }

  onTagSelect(uniqId, item) {
    const { selected, onTagSelect, onTagUnselect } = this.props
    // const { labelsData, labelEntriesData } = labeler
    logic.onOptionSelect(uniqId, item)
    const tagId = logic.getSelectedTagId(item)
    if (R.contains(item, selected)) {
      onTagUnselect(tagId)
    } else {
      onTagSelect(tagId)
    }
  }

  render() {
    const { uniqId } = this.state
    const { labeler, label, readOnly } = this.props
    /* const { tagsData, popVisible, selectedData, labelEntriesData } = labeler */
    const { labelEntriesData } = labeler
    const targetIndex = R.findIndex(R.propEq('uniqId', uniqId))(
      labelEntriesData
    )

    const { tags, popVisible, selected } = labelEntriesData[targetIndex] || {}
    const tagsList = R.reject(t => t.title === 'refined', tags)

    return (
      <Wrapper>
        <Maybe test={readOnly}>
          <Popover
            content={<PopHint>{Trans[label]}</PopHint>}
            placement="bottom"
            trigger="hover"
          >
            <LabelItem>
              <LabelIcon src={LABEL_POOL[label].iconSrc} />
              <Title>
                <Selected items={selected} readOnly={readOnly} />
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
                  selected={selected}
                  onOptionSelect={this.onTagSelect.bind(this, uniqId)}
                />
              }
              placement="right"
              trigger="click"
              visible={popVisible}
              onVisibleChange={logic.onVisibleChange.bind(this, uniqId)}
            >
              <LabelItem>
                <LabelIcon src={LABEL_POOL[label].iconSrc} />
                <Title>
                  {Trans[label]}
                  <Selected items={selected} readOnly={readOnly} />
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

export default withGuardian(
  inject(storePlug('labeler'))(observer(LabelerContainer))
)
