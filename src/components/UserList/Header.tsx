import { FC, Fragment, memo } from 'react'

import { ICON } from '@/config'

import { Wrapper, BackWrapper, PlusIcon } from './styles/header'
import Button from '@/components/Buttons/Button'
import ArrowButton from '@/components/Buttons/ArrowButton'
import LavaLampLoading from '@/components/Loading/LavaLampLoading'

import type { TView } from './spec'

type TProps = {
  view: TView
  goBack: () => void
  goSearch: () => void
}

const Header: FC<TProps> = ({ view, goBack, goSearch }) => {
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

      {view === 'search' && (
        <BackWrapper>
          <Button size="small" onClick={goBack} ghost noBorder>
            <ArrowButton size="medium" direction="left" arrowStyle="simple">
              返回
            </ArrowButton>
          </Button>

          <LavaLampLoading size="small" />
        </BackWrapper>
      )}
    </Wrapper>
  )
}

export default memo(Header)
