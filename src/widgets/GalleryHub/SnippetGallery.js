/*
 *
 * SnippetGallery
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import IconText from '@/widgets/IconText'

import {
  Wrapper,
  Block,
  Header,
  IntroHead,
  LangPrefix,
  Title,
  Footer,
} from './styles/snippet_gallery'

/* eslint-disable-next-line */
const log = buildLog('w:SnippetGallery:index')

const tmpItems = [
  {
    id: '0',
    title: '客户端校验文件大小',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/icons/pl/javascript.png',
  },
  {
    id: '1',
    title: '模式匹配',
    lang: 'ex',
    langColor: '#704A7C',
    icon: 'https://assets.groupher.com/icons/pl/elixir.png',
  },
  {
    id: '2',
    title: 'clojure',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/icons/pl/clojure.png',
  },
  {
    id: '3',
    title: 'Teambition',
    lang: 'ts',
    langColor: '#177488',
    icon: 'https://assets.groupher.com/icons/pl/javascript.png',
  },
  {
    id: '4',
    title: '少数派',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/editor/embeds/shaoshupai.png',
  },
  {
    id: '5',
    title: 'whatever',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/icons/pl/clojure.png',
  },
  {
    id: '6',
    title: 'Teambition',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/icons/pl/javascript.png',
  },
  {
    id: '7',
    title: '少数派',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/editor/embeds/shaoshupai.png',
  },
  {
    id: '8',
    title: 'whatever',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/icons/pl/clojure.png',
  },
  {
    id: '9',
    title: '少数派',
    lang: 'js',
    langColor: '#f4e069',
    icon: 'https://assets.groupher.com/editor/embeds/shaoshupai.png',
  },
]

const SnippetGallery = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Block
          key={item.id}
          borderTop={index <= 2}
          borderRight={(index + 1) % 3 !== 0}
        >
          <Header>
            <IntroHead>
              <LangPrefix color={item.langColor}>{item.lang}</LangPrefix>
              <Title>{item.title}</Title>
            </IntroHead>
          </Header>

          <div>---</div>

          <Footer>
            <IconText iconSrc={`${ICON}/shape/vote-up.svg`}>22</IconText>
            <IconText iconSrc={`${ICON}/shape/vote-up.svg`} size="tiny">
              类型转换
            </IconText>
          </Footer>
        </Block>
      ))}
    </Wrapper>
  )
}

SnippetGallery.propTypes = {
  items: T.arrayOf(T.object),
}

SnippetGallery.defaultProps = {
  items: tmpItems,
}

export default React.memo(SnippetGallery)
