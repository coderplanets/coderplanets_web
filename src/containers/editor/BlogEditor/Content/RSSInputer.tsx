import { FC, memo } from 'react'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import EnterHint from '@/widgets/EnterHint'

import type { TValidState } from '../spec'

import {
  Wrapper,
  Title,
  Inputer,
  InputerWrapper,
  HintWrapper,
  Hint,
} from '../styles/content/rss_inputer'
import { inputOnChange, fetchRSSInfo } from '../logic'

type TProps = {
  rss: string
  loading: boolean
  validState: TValidState
}

const RSSInputer: FC<TProps> = ({ rss, loading, validState }) => {
  return (
    <Wrapper>
      <Title>请输入博客 RSS 地址</Title>
      <InputerWrapper>
        <Inputer
          value={rss}
          placeholder="// 例如：https://example.com/blog/atom.xml"
          onChange={(e) => inputOnChange(e, 'rss')}
          onEnter={() => validState.rss && fetchRSSInfo()}
        />
        {validState.rss && <EnterHint bottom={-30} right={30} />}
      </InputerWrapper>
      {loading ? (
        <LavaLampLoading top={20} left={5} />
      ) : (
        <HintWrapper>
          <Hint>支持 RSS 2.0 以及 Atom 格式</Hint>
          <Hint>已提交的博客会同时保存历史 Feed, 方便关联查看。</Hint>
          <Hint>已提交的 rss 记录每天会定时更新，可能会有滞后。</Hint>
        </HintWrapper>
      )}
    </Wrapper>
  )
}

export default memo(RSSInputer)
