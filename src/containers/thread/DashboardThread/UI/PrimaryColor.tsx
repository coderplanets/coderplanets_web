import { FC, memo } from 'react'

import type { TColorName } from '@/spec'

import { Inline } from '@/widgets/Common'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import ColorSelector from '@/widgets/ColorSelector'

import SectionLabel from '../SectionLabel'
import SavingBar from '../SavingBar'

import { SETTING_FIELD } from '../constant'
import { Wrapper, Label, TheColor } from '../styles/ui/primary_color'
import { edit } from '../logic'

type TProps = {
  primaryColor: TColorName
  isTouched: boolean
  saving: boolean
}

const PrimaryColor: FC<TProps> = ({ primaryColor, isTouched, saving }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="主题色"
        desc={
          <>
            设置后会在常见组件，功能性文字等位置显示该个性化主题色。参考
            <Inline left={4}>
              <ArrowButton size="tiny" arrowStyle="simple">
                影响范围
              </ArrowButton>
            </Inline>
          </>
        }
      />
      <SavingBar
        isTouched={isTouched}
        field={SETTING_FIELD.PRIMARY_COLOR}
        loading={saving}
      >
        <Label color={primaryColor}>
          <ColorSelector
            activeColor={primaryColor}
            onChange={(color) => edit(color, 'primaryColor')}
            placement="right"
            offset={[-1, 15]}
          >
            <TheColor color={primaryColor} />
          </ColorSelector>
        </Label>
      </SavingBar>
    </Wrapper>
  )
}

export default memo(PrimaryColor)
