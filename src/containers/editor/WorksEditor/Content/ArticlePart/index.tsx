import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'
import Button from '@/components/Buttons/Button'
import Checker from '@/components/Checker'

import {
  Wrapper,
  Header,
  Title,
  Section,
  Footer,
} from '../../styles/content/article_part'

import { nextStep, toggleTemplate } from '../../logic'

type TProps = {
  useTemplate: boolean
}

const ArticlePart: FC<TProps> = ({ useTemplate }) => {
  const valid = true

  return (
    <Wrapper>
      <Header>
        <Title>正文介绍</Title>
        <Checker
          checked={useTemplate}
          size="small"
          onChange={(checked) => toggleTemplate(checked)}
        >
          使用模板
        </Checker>
      </Header>
      <Section>
        <RichEditor />
      </Section>
      <Footer>
        {valid && (
          <Button size="medium" disabled={!valid} onClick={nextStep}>
            起飞
          </Button>
        )}
      </Footer>
    </Wrapper>
  )
}

export default memo(ArticlePart)
