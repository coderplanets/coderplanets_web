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
import luaIcon from '../../../static/nodeIcons/programmingL/lua.svg'
import elixirIcon from '../../../static/nodeIcons/programmingL/elixir.svg'
import haskellIcon from '../../../static/nodeIcons/programmingL/haskell.svg'
import delphiIcon from '../../../static/nodeIcons/programmingL/delphi.svg'
import groovyIcon from '../../../static/nodeIcons/programmingL/groovy.svg'
import rIcon from '../../../static/nodeIcons/programmingL/r.svg'
import rustIcon from '../../../static/nodeIcons/programmingL/rust.svg'
import juliaIcon from '../../../static/nodeIcons/programmingL/julia.svg'
import ocamlIcon from '../../../static/nodeIcons/programmingL/ocaml.svg'
import lispIcon from '../../../static/nodeIcons/programmingL/lisp.svg'
import fsharpIcon from '../../../static/nodeIcons/programmingL/fsharp.svg'
import racketIcon from '../../../static/nodeIcons/programmingL/racket.svg'

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

const iconStyle = 'width:100%; height: 100%;'

export const IconImg = styled(Img)`
  ${iconStyle};
  width: auto;
`

// languages

export const javascript = javascriptIcon
export const js = javascriptIcon
export const typescript = typescriptIcon
export const java = javaIcon
export const c = cIcon
export const cpp = cppIcon
export const csharp = csharpIcon
export const php = phpIcon
export const gradle = gradleIcon
export const python = pythonIcon
export const ruby = rubyIcon
export const go = goIcon
export const elm = elmIcon
export const erlang = erlangIcon
export const clojure = clojureIcon
export const nodejs = nodejsIcon
export const dart = dartIcon
export const scala = scalaIcon
export const swift = swiftIcon
export const perl = perlIcon
export const kotlin = kotlinIcon
export const lua = luaIcon
export const elixir = elixirIcon
export const haskell = haskellIcon
export const delphi = delphiIcon
export const groovy = groovyIcon
export const r = rIcon
export const julia = juliaIcon
export const ocaml = ocamlIcon
export const lisp = lispIcon
export const fsharp = fsharpIcon
export const racket = racketIcon
export const rust = styled(rustIcon)`fill: #d1914b;`

// frameworks
export const phoenix = phoenixIcon
export const react = reactIcon
export const angular = angularIcon
export const d3 = d3Icon
export const electron = electronIcon
export const vue = vueIcon
export const webpack = webpackIcon
export const meteor = meteorIcon
export const docker = dockerIcon
export const django = djangoIcon
export const rails = railsIcon
export const laravel = laravelIcon
export const drupal = drupalIcon
export const wordpress = wordpressIcon
export const zend = zendIcon

// database
export const mysql = mysqlIcon
export const postgresql = postgresqlIcon
export const mongodb = mongodbIcon
export const redis = redisIcon

// cmd
export const user = loginIcon
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

export const coderclub = coderclubIcon
export const login = styled(loginIcon)`
  ${iconStyle};
  width: 80%;
  margin-top: -3px;
`

export const forgot = forgotIcon
export const register = registerIcon
export const email = emailIcon
export const themes = themeIcon
export const debug = debugIcon
export const forward = forwardIcon
export const backward = styled(forwardIcon)`
  ${iconStyle};
  transform: rotate(180deg);
`
export const question = questionIcon
export const enter = styled(enterIcon)`
  width: 50px;
  height: 70%;
  transform: rotateX(180deg);
  fill: ${theme('u_panel.text')};
`

export const posts = postsIcon
export const tuts = tutsIcon
export const users = usersIcon
export const map = mapIcon
export const news = newsIcon
export const videos = videosIcon
export const meetups = meetupsIcon
export const jobs = jobsIcon
export const history = historyIcon

export const github = githubIcon
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
