import { FC, Fragment, memo } from 'react'

import { ICON } from '@/config'

import { Wrapper, SearchWrapper, PlusIcon } from '../styles/setter/header'
import Button from '@/widgets/Buttons/Button'

import type { TView } from '../spec'

type TProps = {
  view: TView
  goSearch: () => void
}

const Header: FC<TProps> = ({ view, goSearch }) => {
  return (
    <Wrapper>
      {view === 'list' && (
        <Fragment>
          <div>管理团队成员</div>
          <Button size="small" onClick={goSearch} ghost noBorder>
            <PlusIcon src={`${ICON}/shape/plus.svg`} />
            添加新成员
          </Button>
        </Fragment>
      )}

      {view === 'search' && <SearchWrapper>添加成员</SearchWrapper>}
    </Wrapper>
  )
}

export default memo(Header)
