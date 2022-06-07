import { FC, memo } from 'react'

import type { TColorName } from '@/spec'
import Button from '@/widgets/Buttons/Button'
import { Inline } from '@/widgets/Common'
import ColorSelector from '@/widgets/ColorSelector'

import SectionLabel from '../SectionLabel'
import { Wrapper, Label, TheColor } from '../styles/ui/primary_color'
import { edit } from '../logic'

type TProps = {
  primaryColor: TColorName
}

const PrimaryColor: FC<TProps> = ({ primaryColor }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="主题色"
        desc={
          <>
            设置后会在常见组件，功能性文字等位置显示该个性化主题色。参考
            <Inline left={-4}>
              <Button size="small" ghost noBorder>
                影响范围
              </Button>
            </Inline>
          </>
        }
      />
      <Label color={primaryColor}>
        <ColorSelector
          activeColor={primaryColor}
          onChange={(color) => edit(color, 'primaryColor')}
          placement="right"
          offset={[0, 15]}
        >
          <TheColor color={primaryColor} />
        </ColorSelector>
      </Label>
    </Wrapper>
  )
}

export default memo(PrimaryColor)
