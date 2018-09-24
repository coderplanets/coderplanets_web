/*
 *
 * Labeler
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
import { makeDebugger, storePlug } from '../../utils'

import { Popover } from '../../components'
import TagList from './TagList'
import { Wrapper, LabelItem, LabelIcon, Title } from './styles'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Labeler')
/* eslint-enable no-unused-vars */

class LabelerContainer extends React.Component {
  componentWillMount() {
    const { labeler } = this.props
    logic.init(labeler)
  }

  state = { visible: false }

  onVisibleChange(visible) {
    if (visible) {
      logic.loadTagsIfNeed()
    }
    this.setState({ visible })
  }

  render() {
    const { labeler, label, iconSrc } = this.props
    const { tagsData } = labeler

    const { visible } = this.state

    return (
      <Wrapper>
        <Popover
          content={<TagList data={tagsData} />}
          placement="right"
          trigger="click"
          visible={visible}
          onVisibleChange={this.onVisibleChange.bind(this)}
        >
          <LabelItem>
            <LabelIcon src={iconSrc} />
            <Title>{label}</Title>
          </LabelItem>
        </Popover>
      </Wrapper>
    )
  }
}

LabelerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  label: PropTypes.oneOf(['标签', '薪资', '城市', '编辑']),
  // label: PropTypes.oneOf(['tag', 'salary', 'city']),
  iconSrc: PropTypes.string,
  labeler: PropTypes.any,
}

LabelerContainer.defaultProps = {
  label: '标签',
  // label: 'tag',
  iconSrc: `${ICON_CMD}/extra_tag.svg`,
  labeler: {},
}

export default inject(storePlug('labeler'))(observer(LabelerContainer))
