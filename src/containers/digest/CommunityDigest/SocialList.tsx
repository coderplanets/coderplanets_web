import { FC, memo } from 'react'

import type { TSIZE_SM } from '@/spec'
import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'

import { Wrapper, SocialWrapper, Icon } from './styles/social_list'

const defaultItems = [
  // {
  //   iconSrc: `${ICON_CMD}/navi/location.svg`,
  //   title: '成都',
  // },
  {
    iconSrc: `${ICON_CMD}/navi/space_in.svg`,
    title: '官网',
  },
  {
    iconSrc: `${ICON_CMD}/github.svg`,
    title: 'Github',
  },
  {
    iconSrc: `${ICON_CMD}/navi/twitter.svg`,
    title: 'Twitter',
  },
  {
    iconSrc: `${ICON_CMD}/drink/zhihu.svg`,
    title: '知乎',
  },
]

type TProps = {
  size?: TSIZE_SM
  items?: {
    iconSrc: string
    title: string
  }[]
}

const SocialList: FC<TProps> = ({
  size = SIZE.SMALL,
  items = defaultItems,
}) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <SocialWrapper key={item.title}>
          <Icon size={size} src={item.iconSrc} />
          {/* <Title size={size}>
            {item.title}
          </Title> */}
        </SocialWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(SocialList)
