import { FC, memo } from 'react'

import { Wrapper, Icon, Text } from './styles/navi_button'

const NaviButton = ({ item }) => {
  const { icon, title } = item

  return (
    <Wrapper>
      <Icon src={icon} />
      <Text>{title}</Text>
    </Wrapper>
  )
}

export default memo(NaviButton)
