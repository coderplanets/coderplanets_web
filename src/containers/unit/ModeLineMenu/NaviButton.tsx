import { FC, memo } from 'react'

import { Wrapper, Icon, Title, Desc } from './styles/navi_button'

type TProps = {
  icon: string
  title: string
  desc?: string | null
  menu?: string
  type?: string // 'default' | 'avatar'
}

const NaviButton: FC<TProps> = ({
  icon,
  title,
  type = 'default',
  menu = '',
  desc = null,
}) => {
  return (
    <Wrapper>
      <Icon src={icon} type={type} />
      <Title>{title}</Title>
      {desc && <Desc>{desc}</Desc>}
    </Wrapper>
  )
}

export default memo(NaviButton)
