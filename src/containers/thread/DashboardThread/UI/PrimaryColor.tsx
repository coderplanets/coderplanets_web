import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import { Inline } from '@/widgets/Common'

import SectionLabel from '../SectionLabel'
import { Wrapper, Label, TheColor } from '../styles/ui/primary_color'

const PrimaryColor: FC = () => {
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
      <Label>
        <TheColor />
      </Label>
    </Wrapper>
  )
}

export default memo(PrimaryColor)
