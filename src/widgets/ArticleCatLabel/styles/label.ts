import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import LightSVG from '@/icons/Light'
import BugSVG from '@/icons/Bug'
import QuestionSVG from '@/icons/Question'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
const icon = `
  ${css.size(12)};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
const Feature = styled(LightSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`
const Bug = styled(BugSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`
const Question = styled(QuestionSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`

export const Icon = {
  Feature,
  Bug,
  Question,
}

export const Text = styled.div`
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
  margin-left: 6px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
