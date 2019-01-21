import React from 'react'
import R from 'ramda'

import { ICON_CMD } from 'config'
import { Wrapper, ItemWrapper, Title, Icon } from './styles/source_options'

const recommands = [
  {
    title: 'YouTube',
    icon: `${ICON_CMD}/youtube.svg`,
    activeColor: '#FF0008',
  },
  {
    title: 'Vimeo',
    icon: `${ICON_CMD}/vimeo.svg`,
    activeColor: '#00B7E7',
  },
  {
    title: 'Bilibili',
    icon: `${ICON_CMD}/bilibili.svg`,
    activeColor: '#F78199',
  },
]

const other = {
  title: 'others',
  icon: `${ICON_CMD}/more.svg`,
}

const trimLower = R.compose(
  R.trim,
  R.toLower
)

const SourceOptions = ({ active, sourceOnSelect }) => {
  if (!active) active = ''

  const otherOption =
    !R.contains(
      trimLower(active),
      R.map(trimLower, R.pluck('title', recommands))
    ) && !R.isEmpty(active)

  return (
    <Wrapper>
      {recommands.map(s => (
        <ItemWrapper
          key={s.title}
          onClick={sourceOnSelect.bind(this, trimLower(s.title))}
        >
          <Icon
            src={s.icon}
            active={R.toLower(s.title) === trimLower(active)}
            activeColor={s.activeColor}
          />
          <Title active={R.toLower(s.title) === trimLower(active)}>
            {s.title}
          </Title>
        </ItemWrapper>
      ))}
      <ItemWrapper>
        <Icon src={other.icon} active={otherOption} />
        <Title active={otherOption} nohover>
          {other.title}
        </Title>
      </ItemWrapper>
    </Wrapper>
  )
}

export default SourceOptions
