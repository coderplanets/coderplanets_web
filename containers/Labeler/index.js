/*
 *
 * Labeler
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_ASSETS } from '../../config'
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
    const { labeler } = this.props
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
            <LabelIcon src={`${ICON_ASSETS}/cmd/extra_tag.svg`} />
            <Title>标签</Title>
          </LabelItem>
        </Popover>
      </Wrapper>
    )
  }
}

export default inject(storePlug('labeler'))(observer(LabelerContainer))
