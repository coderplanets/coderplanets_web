import styled from 'styled-components'
import { theme } from '../../../utils/functions'

import Img from '../../../components/Img'

import javascriptIcon from '../../../static/nodeIcons/programmingL/javascript.svg'
import typescriptIcon from '../../../static/nodeIcons/programmingL/typescript.svg'

import javaIcon from '../../../static/nodeIcons/programmingL/java.svg'
import cIcon from '../../../static/nodeIcons/programmingL/c.svg'
import cppIcon from '../../../static/nodeIcons/programmingL/cpp.svg'
import csharpIcon from '../../../static/nodeIcons/programmingL/csharp.svg'
import phpIcon from '../../../static/nodeIcons/programmingL/php.svg'
import gradleIcon from '../../../static/nodeIcons/programmingL/gradle.svg'
import erlangIcon from '../../../static/nodeIcons/programmingL/erlang.svg'
import pythonIcon from '../../../static/nodeIcons/programmingL/python.svg'
import rubyIcon from '../../../static/nodeIcons/programmingL/ruby.svg'
import goIcon from '../../../static/nodeIcons/programmingL/go.svg'
import elmIcon from '../../../static/nodeIcons/programmingL/elm.svg'
import clojureIcon from '../../../static/nodeIcons/programmingL/clojure.svg'
import nodejsIcon from '../../../static/nodeIcons/programmingF/js/nodejs.svg'
import dartIcon from '../../../static/nodeIcons/programmingL/dart.svg'
import scalaIcon from '../../../static/nodeIcons/programmingL/scala.svg'
import swiftIcon from '../../../static/nodeIcons/programmingL/swift.svg'
import perlIcon from '../../../static/nodeIcons/programmingL/perl.svg'
import kotlinIcon from '../../../static/nodeIcons/programmingL/kotlin.svg'

// frameworks
import reactIcon from '../../../static/nodeIcons/programmingF/js/react.svg'
import angularIcon from '../../../static/nodeIcons/programmingF/js/angular.svg'
import d3Icon from '../../../static/nodeIcons/programmingF/js/d3.svg'
import electronIcon from '../../../static/nodeIcons/programmingF/js/electron.svg'
import vueIcon from '../../../static/nodeIcons/programmingF/js/vue.svg'
import webpackIcon from '../../../static/nodeIcons/programmingF/js/webpack.svg'
import meteorIcon from '../../../static/nodeIcons/programmingF/js/meteor.svg'
import phoenixIcon from '../../../static/nodeIcons/programmingF/elixir/phoenix.svg'
import dockerIcon from '../../../static/nodeIcons/programmingF/go/docker.svg'
import djangoIcon from '../../../static/nodeIcons/programmingF/python/django.svg'
import railsIcon from '../../../static/nodeIcons/programmingF/ruby/rails.svg'
import laravelIcon from '../../../static/nodeIcons/programmingF/php/laravel.svg'
import drupalIcon from '../../../static/nodeIcons/programmingF/php/drupal.svg'
import wordpressIcon from '../../../static/nodeIcons/programmingF/php/wordpress.svg'
import zendIcon from '../../../static/nodeIcons/programmingF/php/zend.svg'

// database
import mysqlIcon from '../../../static/nodeIcons/database/mysql.svg'
import postgresqlIcon from '../../../static/nodeIcons/database/postgresql.svg'
import mongodbIcon from '../../../static/nodeIcons/database/mongodb.svg'
import redisIcon from '../../../static/nodeIcons/database/redis.svg'

// cmds
import forgotIcon from '../../../static/nodeIcons/cmd/forget.svg'
import registerIcon from '../../../static/nodeIcons/cmd/register.svg'
import emailIcon from '../../../static/nodeIcons/cmd/mail.svg'
import coderclubIcon from '../../../static/nodeIcons/coderclub.svg'
import loginIcon from '../../../static/nodeIcons/cmd/login.svg'
import themeIcon from '../../../static/nodeIcons/cmd/theme.svg'
import debugIcon from '../../../static/nodeIcons/cmd/debug.svg'
import forwardIcon from '../../../static/nodeIcons/cmd/forward.svg'
import questionIcon from '../../../static/nodeIcons/cmd/question.svg'
import enterIcon from '../../../static/nodeIcons/cmd/enter.svg'
import searchIcon from '../../../static/nodeIcons/cmd/search.svg'
import magicIcon from '../../../static/nodeIcons/cmd/magic.svg'
import githubIcon from '../../../static/nodeIcons/github.svg'
import writeIcon from '../../../static/nodeIcons/cmd/write.svg'
// ----
import postsIcon from '../../../static/nodeIcons/cmd/posts.svg'
import tutsIcon from '../../../static/nodeIcons/cmd/tuts.svg'
import usersIcon from '../../../static/nodeIcons/cmd/users.svg'
import mapIcon from '../../../static/nodeIcons/cmd/map.svg'
import videosIcon from '../../../static/nodeIcons/cmd/video.svg'
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
export const typescript = styled(typescriptIcon)`${iconStyle};`
export const js = styled(javascriptIcon)`${iconStyle};` // for shortcuts
export const java = styled(javaIcon)`${iconStyle};`
export const c = styled(cIcon)`${iconStyle};`
export const cpp = styled(cppIcon)`${iconStyle};`
export const csharp = styled(csharpIcon)`${iconStyle};`
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
export const kotlin = styled(kotlinIcon)`${iconStyle};`

// frameworks
export const phoenix = styled(phoenixIcon)`${iconStyle};`
export const react = styled(reactIcon)`${iconStyle};`
export const angular = styled(angularIcon)`${iconStyle};`
export const d3 = styled(d3Icon)`${iconStyle};`
export const electron = styled(electronIcon)`${iconStyle};`
export const vue = styled(vueIcon)`${iconStyle};`
export const webpack = styled(webpackIcon)`${iconStyle};`
export const meteor = styled(meteorIcon)`${iconStyle};`
export const docker = styled(dockerIcon)`${iconStyle};`
export const django = styled(djangoIcon)`${iconStyle};`
export const rails = styled(railsIcon)`${iconStyle};`
export const laravel = styled(laravelIcon)`${iconStyle};`
export const drupal = styled(drupalIcon)`${iconStyle};`
export const wordpress = styled(wordpressIcon)`${iconStyle};`
export const zend = styled(zendIcon)`${iconStyle};`

// database
export const mysql = styled(mysqlIcon)`${iconStyle};`
export const postgresql = styled(postgresqlIcon)`${iconStyle};`
export const mongodb = styled(mongodbIcon)`${iconStyle};`
export const redis = styled(redisIcon)`${iconStyle};`

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

export const coderclub = styled(coderclubIcon)`${iconStyle};`
export const login = styled(loginIcon)`
  ${iconStyle};
  width: 80%;
  margin-top: -3px;
`

export const forgot = styled(forgotIcon)`${iconStyle};`
export const register = styled(registerIcon)`${iconStyle};`
export const email = styled(emailIcon)`${iconStyle};`
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
export const videos = styled(videosIcon)`${iconStyle};`
export const meetups = styled(meetupsIcon)`${iconStyle};`
export const jobs = styled(jobsIcon)`${iconStyle};`
export const history = styled(historyIcon)`${iconStyle};`

export const github = styled(githubIcon)`${iconStyle};`
export const write = styled(writeIcon)`
  ${iconStyle};
  width: 80%;
`

export const themeDot = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  background: ${props => props.bg};
  border-radius: 50%;
`
