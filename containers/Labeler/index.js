/*
 *
 * Labeler
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import { Popover } from '../../components'
import Options from './Options'
import Selected from './Selected'
import { Wrapper, LabelItem, LabelIcon, Title } from './styles'

import optionMap from './option_map'
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
  state = {
    uniqId: uid.gen(),
  }

  componentWillMount() {
    const { labeler, label, multi } = this.props
    const { uniqId } = this.state

    const options = { label, multi }
    logic.init(labeler, uniqId, options)
  }

  componentWillUnmount() {
    const { uniqId } = this.state
    logic.uninit(uniqId)
  }

  render() {
    const { uniqId } = this.state
    const { labeler, label } = this.props
    /* const { tagsData, popVisible, bucketData, labelEntriesData } = labeler */
    const { labelEntriesData } = labeler
    const targetIndex = R.findIndex(R.propEq('uniqId', uniqId))(
      labelEntriesData
    )

    const { tags, popVisible, bucket } = labelEntriesData[targetIndex] || {}

    return (
      <Wrapper>
        {targetIndex >= 0 ? (
          <Popover
            content={
              <Options
                label={label}
                tagsData={tags}
                selected={bucket}
                onOptionSelect={logic.onOptionSelect.bind(this, uniqId)}
              />
            }
            placement="right"
            trigger="click"
            visible={popVisible}
            onVisibleChange={logic.onVisibleChange.bind(this, uniqId)}
          >
            <LabelItem>
              <LabelIcon src={optionMap[label].iconSrc} />
              <Title>
                {trans[label]}
                <Selected items={bucket} />
              </Title>
            </LabelItem>
          </Popover>
        ) : null}
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
}

LabelerContainer.defaultProps = {
  label: 'default',
  labeler: {},
  multi: false,
}

export default inject(storePlug('labeler'))(observer(LabelerContainer))
