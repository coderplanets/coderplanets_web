import { FC, memo } from 'react'

import type { TSizeSM } from '@/spec'
import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'

import { Wrapper, SocialWrapper, Icon } from './styles'

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
  size?: TSizeSM
  testid?: string
  items?: {
    iconSrc: string
    title: string
  }[]
}

const SocialList: FC<TProps> = ({
  size = SIZE.SMALL,
  testid = 'social-list',
  items = defaultItems,
}) => {
  return (
    <Wrapper testid={testid}>
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
