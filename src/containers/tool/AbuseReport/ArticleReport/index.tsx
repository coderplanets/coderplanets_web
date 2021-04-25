import React from 'react'

import { ICON } from '@/config'
import Checker from '@/components/Checker'

import {
  Wrapper,
  Option,
  Title,
  QuestionIcon,
  Note,
} from '../styles/article_report'

const ArticleReport: React.FC = () => {
  return (
    <Wrapper>
      <Option>
        <Checker checked />
        <Title>重复内容</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>
      <Option>
        <Checker />
        <Title>标题党</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>
      <Option>
        <Checker />
        <Title>硬广，软广</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>
      <Option>
        <Checker />
        <Title>坏问题</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>
      <Option>
        <Checker />
        <Title>违规信息</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>
      <Option>
        <Checker />
        <Title>其他</Title>
        <QuestionIcon src={`${ICON}/shape/question.svg`} />
      </Option>

      <Note>
        举报成功后社区志愿者会在第一时间处理，处理结果会公示在这里。如果你对社区治理有更好的想法或建议，请联系我们。
      </Note>
    </Wrapper>
  )
}

export default ArticleReport
