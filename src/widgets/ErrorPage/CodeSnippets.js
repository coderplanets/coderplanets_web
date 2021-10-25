import React from 'react'

import {
  Wrapper,
  Indent,
  KeyToken,
  StringToken,
  AtomToken,
} from './styles/code_snippets'

const lcub = '{'
const rcub = '}'
const colon = ':'
const arrow = '->'

const CodeSnippets = ({ path }) => {
  return (
    <Wrapper testid="code-snippets">
      <div>
        <KeyToken>case</KeyToken> Page.goto(
        <StringToken>&quot;{path}&quot;</StringToken>)
        <KeyToken>&nbsp;do</KeyToken>
      </div>
      <Indent>
        {lcub}
        <AtomToken>&nbsp;{colon}ok</AtomToken>, {colon}ready&nbsp;{rcub} &nbsp;
        {arrow} IO.puts <StringToken>“have fun !“</StringToken>
      </Indent>

      <Indent errorBg>
        {lcub}
        <AtomToken>&nbsp;{colon}error</AtomToken>, {colon}404&nbsp;{rcub}{' '}
        {arrow} IO.puts <StringToken>“请求页面未找到 ..”</StringToken>
      </Indent>
      <Indent>
        {lcub}
        <AtomToken>&nbsp;{colon}error</AtomToken>, {colon}500&nbsp;{rcub}{' '}
        {arrow} IO.puts <StringToken>“服务器发生错误 ..”</StringToken>
      </Indent>
      <KeyToken>end</KeyToken>
    </Wrapper>
  )
}

export default React.memo(CodeSnippets)
