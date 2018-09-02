/*
 *
 * TagsBar
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'

import { Wrapper, TagItem, TagDot, TagTitle, AllTagIcon } from './styles'
import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:TagsBar')
/* eslint-enable no-unused-vars */

const prettyColor = {
  red: '#FC6360',
  orange: '#FFA653',
  yellow: '#F8CE5A',
  green: '#60CC5A',
  cyan: '#9fefe4',
  blue: '#2CB8F0',
  purple: '#D488DE',
  grey: 'lightgrey',
}

class TagsBarContainer extends React.Component {
  componentWillMount() {
    const { tagsBar, thread } = this.props
    logic.init(tagsBar)
    logic.loadIfNeed(thread)
  }

  render() {
    const { tagsBar, active, onSelect } = this.props

    const { tagsData } = tagsBar

    return (
      <Wrapper>
        {active.title ? (
          <TagItem onClick={onSelect.bind(this, { title: '', color: '' })}>
            <AllTagIcon src={`${ICON_ASSETS}/cmd/all_tags.svg`} />
            <TagTitle>全部标签</TagTitle>
          </TagItem>
        ) : null}

        {tagsData.map(tag => (
          <TagItem
            key={shortid.generate()}
            onClick={onSelect.bind(this, {
              title: tag.title,
              color: tag.color,
              ext: 'helli',
            })}
          >
            <TagDot
              color={prettyColor[tag.color]}
              active={active.title}
              title={tag.title}
            />
            <TagTitle active={active.title} title={tag.title} color={tag.color}>
              {tag.title}
            </TagTitle>
          </TagItem>
        ))}
      </Wrapper>
    )
  }
}

TagsBarContainer.propTypes = {
  tagsBar: PropTypes.object.isRequired,
  thread: PropTypes.string,
  /*
     tags: PropTypes.arrayOf(
     PropTypes.shape({
     color: PropTypes.string,
     title: PropTypes.string,
     })
     ).isRequired,
   */

  /*
     active: PropTypes.shape({
     color: PropTypes.string,
     title: PropTypes.string,
     }),
   */
  onSelect: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

TagsBarContainer.defaultProps = {
  thread: THREAD.POST,
}

export default inject(storePlug('tagsBar'))(observer(TagsBarContainer))
