import { FC, memo } from 'react'

import { Wrapper, Icon, Text } from './styles/navi_button'

type TProps = {
  item: {
    icon: string
    title: string
  }
}

const NaviButton: FC<TProps> = ({ item }) => {
  const { icon, title } = item

  return (
    <Wrapper>
      <Icon src={icon} />
      <Text>{title}</Text>
    </Wrapper>
  )
}

export default memo(NaviButton)
