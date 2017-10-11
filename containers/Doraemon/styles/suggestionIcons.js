import styled from 'styled-components'
import { theme } from '../../../utils/functions'

import Img from '../../../components/Img'

import javascriptIcon from '../../../static/nodeIcons/programmingL/javascript.svg'

import javaIcon from '../../../static/nodeIcons/programmingL/java.svg'
import phpIcon from '../../../static/nodeIcons/programmingL/php.svg'
import gradleIcon from '../../../static/nodeIcons/programmingL/gradle.svg'
import erlangIcon from '../../../static/nodeIcons/programmingL/erlang.svg'
import pythonIcon from '../../../static/nodeIcons/programmingL/python.svg'
import rubyIcon from '../../../static/nodeIcons/programmingL/ruby.svg'
import goIcon from '../../../static/nodeIcons/programmingL/go.svg'
import elmIcon from '../../../static/nodeIcons/programmingL/elm.svg'
import clojureIcon from '../../../static/nodeIcons/programmingL/clojure.svg'
import nodejsIcon from '../../../static/nodeIcons/programmingL/nodejs.svg'
import dartIcon from '../../../static/nodeIcons/programmingL/dart.svg'
import scalaIcon from '../../../static/nodeIcons/programmingL/scala.svg'
import swiftIcon from '../../../static/nodeIcons/programmingL/swift.svg'
import perlIcon from '../../../static/nodeIcons/programmingL/perl.svg'

// frameworks
import reactIcon from '../../../static/nodeIcons/programmingL/react.svg'
import phoenixIcon from '../../../static/nodeIcons/programmingF/js/phoenix.svg'
import dockerIcon from '../../../static/nodeIcons/programmingF/go/docker.svg'

// cmds
import themeIcon from '../../../static/nodeIcons/cmd/theme.svg'
import debugIcon from '../../../static/nodeIcons/cmd/debug.svg'
import forwardIcon from '../../../static/nodeIcons/cmd/forward.svg'
import questionIcon from '../../../static/nodeIcons/cmd/question.svg'
import enterIcon from '../../../static/nodeIcons/cmd/enter.svg'
import searchIcon from '../../../static/nodeIcons/cmd/search.svg'
import magicIcon from '../../../static/nodeIcons/cmd/magic.svg'
// ----
import postsIcon from '../../../static/nodeIcons/cmd/posts.svg'
import tutsIcon from '../../../static/nodeIcons/cmd/tuts.svg'
import usersIcon from '../../../static/nodeIcons/cmd/users.svg'
import mapIcon from '../../../static/nodeIcons/cmd/map.svg'
import videoIcon from '../../../static/nodeIcons/cmd/video.svg'
import newsIcon from '../../../static/nodeIcons/cmd/news.svg'
import meetupsIcon from '../../../static/nodeIcons/cmd/meetups.svg'
import jobsIcon from '../../../static/nodeIcons/cmd/jobs.svg'
import historyIcon from '../../../static/nodeIcons/cmd/history.svg'

export const langImgIcons = ['elixir', 'r', 'julia', 'red', 'rust']
export const frameworkImgIcons = ['django']

const iconStyle = 'width:100%; height: 100%;'
export const IconImg = styled(Img)`
  ${iconStyle};
  width: auto;
`

// languages
export const javascript = styled(javascriptIcon)`${iconStyle};`
export const js = styled(javascriptIcon)`${iconStyle};` // for shortcuts
export const java = styled(javaIcon)`${iconStyle};`
export const php = styled(phpIcon)`${iconStyle};`
export const gradle = styled(gradleIcon)`${iconStyle};`
export const python = styled(pythonIcon)`${iconStyle};`
export const ruby = styled(rubyIcon)`${iconStyle};`
export const go = styled(goIcon)`${iconStyle};`
export const elm = styled(elmIcon)`${iconStyle};`
export const erlang = styled(erlangIcon)`${iconStyle};`
export const clojure = styled(clojureIcon)`${iconStyle};`
export const nodejs = styled(nodejsIcon)`${iconStyle};`
export const dart = styled(dartIcon)`${iconStyle};`
export const scala = styled(scalaIcon)`${iconStyle};`
export const swift = styled(swiftIcon)`${iconStyle};`
export const perl = styled(perlIcon)`${iconStyle};`

// frameworks
export const phoenix = styled(phoenixIcon)`${iconStyle};`
export const react = styled(reactIcon)`${iconStyle};`
export const docker = styled(dockerIcon)`${iconStyle};`

// cmd
export const search = styled(searchIcon)`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  fill: ${theme('u_panel.search_icon')};
`
export const magic = styled(magicIcon)`
  width: 30px;
  height: 25px;
  margin-top: 20px;
  transform: rotate(-30deg);
`

export const themes = styled(themeIcon)`${iconStyle};`
export const debug = styled(debugIcon)`${iconStyle};`
export const forward = styled(forwardIcon)`${iconStyle};`
export const backward = styled(forwardIcon)`
  ${iconStyle};
  transform: rotate(180deg);
`
export const question = styled(questionIcon)`${iconStyle};`
export const enter = styled(enterIcon)`
  width: 50px;
  height: 70%;
  transform: rotateX(180deg);
  fill: ${theme('u_panel.text')};
`

export const posts = styled(postsIcon)`${iconStyle};`
export const tuts = styled(tutsIcon)`${iconStyle};`
export const users = styled(usersIcon)`${iconStyle};`
export const map = styled(mapIcon)`${iconStyle};`
export const news = styled(newsIcon)`${iconStyle};`
export const video = styled(videoIcon)`${iconStyle};`
export const meetups = styled(meetupsIcon)`${iconStyle};`
export const jobs = styled(jobsIcon)`${iconStyle};`
export const history = styled(historyIcon)`${iconStyle};`
