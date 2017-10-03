import styled from 'styled-components'

import Img from '../../../components/Img'

// import { javascriptIcon } from '../../../static/nodeIcons'
import javascriptIcon from '../../../static/nodeIcons/javascript.svg'

import javaIcon from '../../../static/nodeIcons/java.svg'
import phpIcon from '../../../static/nodeIcons/php.svg'
import gradleIcon from '../../../static/nodeIcons/gradle.svg'
import reactIcon from '../../../static/nodeIcons/react.svg'
import erlangIcon from '../../../static/nodeIcons/erlang.svg'
import pythonIcon from '../../../static/nodeIcons/python.svg'
import rubyIcon from '../../../static/nodeIcons/ruby.svg'
import phoenixIcon from '../../../static/nodeIcons/phoenix.svg'
import goIcon from '../../../static/nodeIcons/go.svg'

// import elixirIcon from '../../../static/nodeIcons/elixir.png'

const iconStyle = 'width: 100%;height: 100%;'

export const IconImg = styled(Img)`${iconStyle};`

export const javascript = styled(javascriptIcon)`${iconStyle};`
export const java = styled(javaIcon)`${iconStyle};`
export const php = styled(phpIcon)`${iconStyle};`
export const gradle = styled(gradleIcon)`${iconStyle};`
export const python = styled(pythonIcon)`${iconStyle};`
export const ruby = styled(rubyIcon)`${iconStyle};`
export const phoenix = styled(phoenixIcon)`${iconStyle};`
export const go = styled(goIcon)`${iconStyle};`

export const react = styled(reactIcon)`
  ${iconStyle};
  fill: #46daf9;
`

export const erlang = styled(erlangIcon)`
  ${iconStyle};
  fill: #b00136;
`

export const imgIcons = ['elixir']
