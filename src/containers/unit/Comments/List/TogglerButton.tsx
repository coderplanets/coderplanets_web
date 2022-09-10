import { FC, memo, Fragment } from 'react'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import { Wrapper, SlashSign, Text } from '../styles/list/toggler_button'

type TProps = {
  text: string
  loading: boolean
  onClick: () => void
}

const TogglerButton: FC<TProps> = ({ text, loading, onClick }) => {
  return (
    <Wrapper>
      <SlashSign>&#47;&#47;</SlashSign>
      {loading ? (
        <LavaLampLoading left={18} />
      ) : (
        <Fragment>
          <Text onClick={onClick}>{text}</Text>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(TogglerButton)
