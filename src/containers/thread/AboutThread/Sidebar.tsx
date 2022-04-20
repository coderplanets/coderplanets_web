import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'
import {
  Wrapper,
  Block,
  Title,
  Reports,
  ReportsArticle,
  Press,
  Desc,
} from './styles/sidebar'

const Sidebar: FC = () => {
  return (
    <Wrapper>
      <Block>
        <Title>关注我们</Title>
        <Desc>Github / Twitter / Weibo / weichat / B站</Desc>
      </Block>
      <Block>
        <Title>媒体报道</Title>
        <Reports>
          <Press>36kr</Press>
          <ReportsArticle>
            新一代xxx一体化协作平台「XXX」获1000万元Pre
          </ReportsArticle>
        </Reports>
        <Br top={5} />
        <Reports>
          <Press>科技周刊</Press>
          <ReportsArticle>这个平台太酷了</ReportsArticle>
        </Reports>
      </Block>
      <Block>
        <Title>播客</Title>
        <Reports>喜马拉雅</Reports>
      </Block>
      <Block>
        <Title>加入我们</Title>
        <Desc>前端工程师，运营</Desc>
      </Block>
      <Block>
        <Title>所在地</Title>
        <Desc>成都, 厦门</Desc>
      </Block>
    </Wrapper>
  )
}

export default memo(Sidebar)
