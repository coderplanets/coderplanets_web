import { FC, memo } from 'react'
import { ICON_BASE } from '@/config'

import {
  Wrapper,
  Block,
  Logo,
  Title,
} from '../../styles/content/tech_stack_part/selector_row'

const SelectorRow: FC = () => {
  return (
    <Wrapper>
      <Block>
        <Logo src={`${ICON_BASE}/pl/javascript.png`} />
        <Title>JavaScript</Title>
      </Block>
      <Block>
        <Logo src={`${ICON_BASE}/pl/elixir.png`} />
        <Title>Elixir</Title>
      </Block>
      <Block>
        <Logo src={`${ICON_BASE}/pl/php.png`} />
        <Title>PHP</Title>
      </Block>

      <Block>
        <Logo src={`${ICON_BASE}/pl/go.png`} />
        <Title>Go</Title>
      </Block>
      <Block>
        <Logo src={`${ICON_BASE}/pl/rust.png`} />
        <Title>Rust</Title>
      </Block>

      <Block>
        <Logo src={`${ICON_BASE}/pl/ruby.png`} />
        <Title>Ruby</Title>
      </Block>

      {/*
      <Block>
        <Logo src={`${ICON_BASE}/pl/java.png`} />
        <Title>Java</Title>
      </Block>

      <Block>
        <Logo src={`${ICON_BASE}/pl/clojure.png`} />
        <Title>Clojure</Title>
      </Block> */}
    </Wrapper>
  )
}

export default memo(SelectorRow)
