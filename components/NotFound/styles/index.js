import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils/themes'

export const Wrapper = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 5em;
  background: ${theme('error.bg')};
  width: 100%;
  height: 60vh;
  margin-top: 2em;

  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    );
  background-size: 65px 65px;
`

export const Icon404 = styled(ReactSVG)`
  width: 100px;
  height: 100px;
`

export const Icon = styled.div``
export const Text = styled.div`
  margin-left: 1.5em;
`
export const Title = styled.div`
  color: ${theme('error.title')};
  font-size: 2em;
  margin-top: 0.2em;
`

export const Desc = styled.div`
  color: ${theme('error.desc')};
  font-size: 1.3em;
  margin-top: 1em;
`
