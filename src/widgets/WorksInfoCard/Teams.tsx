import { FC, memo } from 'react'

import { Wrapper, Member, Avatar, Intro, Name, Bio } from './styles/teams'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const tmpList = [
  {
    id: '1',
    avatar: 'https://avatars.githubusercontent.com/u/17426470?s=64&v=4',
    nickname: 'coolMan',
    bio: '这是一个随机头像，from github',
  },
  // {
  //   id: '2',
  //   avatar: 'https://avatars.githubusercontent.com/u/5580297?s=64&v=4',
  //   nickname: 'coolMan',
  //   bio: '这是一个随机头像，from github',
  // },
  // {
  //   id: '3',
  //   avatar: 'https://avatars.githubusercontent.com/u/2041385?s=64&v=4',
  //   nickname: 'coolMan',
  //   bio: '这是一个随机头像，from github',
  // },
]

const Teams: FC = () => {
  return (
    <Wrapper>
      {tmpList.map((item) => (
        <Member key={item.id}>
          <Avatar src={item.avatar} />
          <Intro>
            <Name>{item.nickname}</Name>
            <Bio>{item.bio}</Bio>
          </Intro>
        </Member>
      ))}
    </Wrapper>
  )
}

export default memo(Teams)
