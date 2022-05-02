import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, Hint, FoldHint, ArrowIcon } from './styles/fold_box'

type TProps = {
  fold: boolean
  mode: 'article' | 'comment'
  onFold: () => void
  onExpand: () => void
}

const FoldBox: FC<TProps> = ({ fold, onFold, onExpand, mode }) => {
  return (
    <Wrapper
      fold={fold}
      mode={mode}
      onClick={() => (fold ? onExpand() : onFold())}
    >
      {!fold && (
        <FoldHint mode={mode}>
          折叠内容
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} reverse />
        </FoldHint>
      )}
      {fold && (
        <Hint mode={mode}>
          展开全部
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Hint>
      )}
    </Wrapper>
  )
}

export default memo(FoldBox)
