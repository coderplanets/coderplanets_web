import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, Hint, FoldHint, ArrowIcon } from './styles/fold_box'

type TProps = {
  fold: boolean
  onFold: () => void
  onExpand: () => void
}

const FoldBox: FC<TProps> = ({ fold, onFold, onExpand }) => {
  return (
    <Wrapper fold={fold} onClick={() => (fold ? onExpand() : onFold())}>
      {!fold && (
        <FoldHint>
          折叠
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} reverse />
        </FoldHint>
      )}
      {fold && (
        <Hint>
          展开全部
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </Hint>
      )}
    </Wrapper>
  )
}

export default memo(FoldBox)
