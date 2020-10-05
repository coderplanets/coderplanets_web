import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'

import { Wrapper, SocialWrapper, Icon } from './styles/social_list'

const defaultItems = [
  {
    iconSrc: `${ICON_CMD}/navi/readme.svg`,
    title: '项目介绍',
  },
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

const SocialList = ({ size, items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <SocialWrapper key={item.title} size={size}>
          <Icon size={size} src={item.iconSrc} />
          {/* <Title size={size}>
            {item.title}
          </Title> */}
        </SocialWrapper>
      ))}
    </Wrapper>
  )
}

SocialList.propTypes = {
  size: T.oneOf(['small', 'medium']),
  items: T.arrayOf(T.object),
}

SocialList.defaultProps = {
  size: 'small',
  items: defaultItems,
}

export default React.memo(SocialList)
