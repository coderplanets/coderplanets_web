import React from 'react'
import { compose, trim, toLower, contains, map, pluck, isEmpty } from 'ramda'

import { ICON_CMD } from '@/config'
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

const trimLower = compose(trim, toLower)

const SourceOptions = ({ active, sourceOnSelect }) => {
  if (!active) active = ''

  const otherOption =
    !contains(trimLower(active), map(trimLower, pluck('title', recommands))) &&
    !isEmpty(active)

  return (
    <Wrapper>
      {recommands.map((s) => (
        <ItemWrapper
          key={s.title}
          onClick={() => sourceOnSelect(trimLower(s.title))}
        >
          <Icon
            src={s.icon}
            active={toLower(s.title) === trimLower(active)}
            activeColor={s.activeColor}
          />
          <Title active={toLower(s.title) === trimLower(active)}>
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

export default React.memo(SourceOptions)
