/*
 *
 * Labeler
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import { LABEL_POOL } from '../../config'

import { Popover, Maybe } from '../../components'
import Options from './Options'
import Selected from './Selected'
import { Wrapper, LabelItem, LabelIcon, Title, PopHint } from './styles'

import { makeDebugger, storePlug, uid } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Labeler')
/* eslint-enable no-unused-vars */

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

  render() {
    const { uniqId } = this.state
    const { labeler, label, readonly } = this.props
    /* const { tagsData, popVisible, selectedData, labelEntriesData } = labeler */
    const { labelEntriesData } = labeler
    const targetIndex = R.findIndex(R.propEq('uniqId', uniqId))(
      labelEntriesData
    )

    const { tags, popVisible, selected } = labelEntriesData[targetIndex] || {}

    return (
      <Wrapper>
        <Maybe test={readonly}>
          <Popover
            content={<PopHint>{trans[label]}</PopHint>}
            placement="bottom"
            trigger="hover"
          >
            <LabelItem>
              <LabelIcon src={LABEL_POOL[label].iconSrc} />
              <Title>
                <Selected items={selected} readonly={readonly} />
              </Title>
            </LabelItem>
          </Popover>
        </Maybe>
        <Maybe test={!readonly}>
          {targetIndex >= 0 ? (
            <Popover
              content={
                <Options
                  label={label}
                  tagsData={tags}
                  selected={selected}
                  onOptionSelect={logic.onOptionSelect.bind(this, uniqId)}
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
                  {trans[label]}
                  <Selected items={selected} readonly={readonly} />
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

  readonly: PropTypes.bool,
}

LabelerContainer.defaultProps = {
  label: 'default',
  labeler: {},
  multi: false,
  selected: [],
  readonly: false,
}

export default inject(storePlug('labeler'))(observer(LabelerContainer))
