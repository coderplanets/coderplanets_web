import { FC, memo } from 'react'

import ArrowLink from '@/widgets/Buttons/ArrowLink'

import {
  Wrapper,
  Header,
  Title,
  Desc,
  Items,
  DescItem,
  Footer,
} from './styles/readonly_panel'

type TProps = {
  type?: 'cc' | 'approve' | 'forbid'
}

const ReadOnlyPanel: FC<TProps> = ({ type }) => {
  switch (type) {
    case 'approve': {
      return (
        <Wrapper>
          <Header>
            <Title>转载需授权</Title>
          </Header>
          <Desc>
            根据作者设置，转载需获取本人授权。相关联系方式可参考作者主页。
          </Desc>
        </Wrapper>
      )
    }

    case 'forbid': {
      return (
        <Wrapper>
          <Header>
            <Title>禁止转载</Title>
          </Header>
          <Desc>
            根据作者设置，本文严禁任何方式的转载，如有疑问，请尝试联系作者。
          </Desc>
        </Wrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <Header>
            <Title>知识共享 4.0</Title>
          </Header>

          <Desc>
            本作品采用知识共享「署名-非商业性使用-禁止演绎 4.0
            国际」许可证授权。
            <Items>
              <DescItem path="article/cc-by.svg" size="large" highlight>
                署名
              </DescItem>
              <DescItem path="article/cc-nc.svg" size="large" highlight>
                非商业性使用
              </DescItem>
              <DescItem path="article/cc-nd.svg" size="large" highlight>
                禁止演绎
              </DescItem>
            </Items>
          </Desc>
          <Footer>
            <ArrowLink
              size="tiny"
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
            >
              查看完整版本
            </ArrowLink>
          </Footer>
        </Wrapper>
      )
    }
  }
}

export default memo(ReadOnlyPanel)
