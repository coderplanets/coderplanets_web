/*
 *
 * TagsBar
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { withGuardian } from 'components/HOC'
import { ICON_CMD } from 'config'

import {
  makeDebugger,
  storePlug,
  sortByColor,
  THREAD,
  TOPIC,
  Trans,
} from 'utils'
import TagOptions from './TagOptions'

import {
  Wrapper,
  TagItem,
  TagDot,
  TagTitle,
  AllTagIcon,
  TagOptionsWrapper,
} from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:TagsBar')

class TagsBarContainer extends React.Component {
  componentDidMount() {
    const { tagsBar, thread, topic, active } = this.props
    logic.init(tagsBar, thread, topic, active)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  onSelect(tag) {
    const { onSelect } = this.props

    logic.onTagSelect(tag)
    onSelect(tag)
  }

  render() {
    const { tagsBar } = this.props
    const { tagsData, activeTagData } = tagsBar

    const sortedTags = sortByColor(tagsData)

    return (
      <Wrapper>
        {activeTagData.title && (
          <TagItem
            onClick={this.onSelect.bind(this, { id: '', title: '', color: '' })}
          >
            <AllTagIcon src={`${ICON_CMD}/all_tags.svg`} />
            <TagTitle>全部</TagTitle>
          </TagItem>
        )}

        {sortedTags.map(tag => (
          <TagItem key={tag.id}>
            <TagDot
              color={tag.color}
              active={activeTagData.title}
              title={tag.title}
              onClick={this.onSelect.bind(this, {
                id: tag.id,
                title: tag.title,
                color: tag.color,
              })}
            />
            <TagTitle
              active={activeTagData.title}
              title={tag.title}
              color={tag.color}
              onClick={this.onSelect.bind(this, {
                id: tag.id,
                title: tag.title,
                color: tag.color,
              })}
            >
              {Trans(tag.title)}
            </TagTitle>
            <TagOptionsWrapper>
              <TagOptions
                onInclude={this.onSelect.bind(this, {
                  id: tag.id,
                  title: tag.title,
                  color: tag.color,
                })}
              />
            </TagOptionsWrapper>
          </TagItem>
        ))}
      </Wrapper>
    )
  }
}

TagsBarContainer.propTypes = {
  tagsBar: PropTypes.object.isRequired,
  thread: PropTypes.string,
  topic: PropTypes.string,
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
  active: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
  }),
}

TagsBarContainer.defaultProps = {
  thread: THREAD.POST,
  topic: TOPIC.POST,
  active: {},
}

export default withGuardian(
  inject(storePlug('tagsBar'))(observer(TagsBarContainer))
)
