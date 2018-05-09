/*
 *
 * TagList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

// import TagsLoading from '../../components/LoadingEffects/TagsLoading'
import { Wrapper, TagItem, TagDot, TagTitle, AllTagIcon } from './styles'

import { ICON_ASSETS } from '../../config'
import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:TagList:index')
/* eslint-enable no-unused-vars */

const TagList = ({ tags, active, onSelect }) => {
  // const loading= true
  //   <TagsLoading num={7} />

  return (
    <Wrapper>
      {active.title ? (
        <TagItem
          onClick={onSelect.bind(this, {
            title: '',
            color: '',
          })}
        >
          <AllTagIcon path={`${ICON_ASSETS}/cmd/all_tags.svg`} />
          <TagTitle>全部标签</TagTitle>
        </TagItem>
      ) : (
        <div />
      )}

      {tags.map(tag => (
        <TagItem
          key={shortid.generate()}
          onClick={onSelect.bind(this, {
            title: tag.title,
            color: tag.color,
            ext: 'helli',
          })}
        >
          <TagDot color={tag.color} active={active.title} title={tag.title} />
          <TagTitle active={active.title} title={tag.title} color={tag.color}>
            {tag.title}
          </TagTitle>
        </TagItem>
      ))}
    </Wrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  active: PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

TagList.defaultProps = {
  active: { title: '', color: '' },
}

export default TagList
