import { FC, memo } from 'react'

import { Wrapper, Avatar } from '../styles/holy_grail_view/team_list'

const items = [
  {
    icon: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
  },
  {
    icon: 'https://avatars3.githubusercontent.com/u/11154968?v=4',
  },
  {
    icon: 'https://avatars1.githubusercontent.com/u/26295698?v=4',
  },
  {
    icon: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
  },
]

const TeamList: FC = () => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Avatar key={index} src={item.icon} />
      ))}
    </Wrapper>
  )
}

export default memo(TeamList)
