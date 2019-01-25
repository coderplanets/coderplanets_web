
## Development


`npm run prod` -- will use production endpoint as data server which is defined in `config/endpoint.js`

`npm run dev` -- will use dev endpoint as data server which is defined in `config/endpoint.js`

`npm run local` -- will use localhost:4001 as data server which is defined in `config/endpoint.js`

config/endpoint.js

```js
export const otherAPI = '....'

const getGraphQLEndpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://api.coderplanets.com/graphiql'

    case 'dev':
      return 'http://devapi.coderplanets.com/graphiql'

    case 'local':
      return 'http://localhost:4001/graphiql'

    default:
      return 'http://localhost:4001/graphiql'
  }
}

export const GRAPHQL_ENDPOINT = getGraphQLEndpoint()
```
you can edit it to match your own needs.


## env

frontend code can not use NODE_ENV directly, this project use [webpack-env](https://github.com/mrsteele/dotenv-webpack)(`systemvars:true`) to pass the `NODE_ENV` env to frontend code, so frontend code can use it like 'process.env.NODE_ENV'. 

see next.config.js [details](https://github.com/mydearxym/mastani_web/blob/dev/next.config.js#L56-L60)
```js
config.plugins.push(
  new Dotenv({
    path: './.env',
    systemvars: true,
  })
)
```

## valid cmd


  [valid launch commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  dev         : start web server in local env
              | HMR is enabled
  .....................................................
  launch.dev  : start web server in development env
              | HMR is disenabled
  .....................................................
  launch.prod : start web server in produnction env
              | HMR is disenabled
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid generators]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  gen : generate container/component/store fils
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid commit commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  commit : commit changes follow convention
         | convention: AngularJS's commit message convention
             | link: https://github.com/commitizen/cz-cli
             | link: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
         | require: npm install
         | require: npm -v > 5.2 to use npx
             | link: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid release commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  release        : release version by automatic CHANGELOG generation
                 | link: https://github.com/conventional-changelog/standard-version
                 | more:
                    | npm run release -- --prerelease
                    | npm run release -- --prerelease alpha
  .................................................................................
  release.master : release master branch
  .................................................................................
  release.dev    : release dev branch
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid deploy commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  deploy.dev  : pack & push code to clould docker for dev
               | need manually restart docker container
  ...............................................................
  deploy.prod : pack & push code to clould docker for produnction
               | need manually restart docker container
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid test commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  test             : run all the test then quit
  ...............................................................
  test.watch       : run all the test in watch mode
  ...............................................................
  test.e2e         : run e2e test using cypress
                   | docs: https://docs.cypress.io/
  ...............................................................
  test.report.text : run test then show test coverage in terminal
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid dashboard commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  dashboard.ga     : google analytics dashboard
                   | https://analytics.google.com
  .................................................................................
  dashboard.apollo : graphql api status provide by apollo engine
                   | https://engine.apollographql.com/account/gh.mydearxym/services
  .................................................................................
  dashboard.sentry : sentry error track
                   | https://sentry.io/mastani-stack/cps_web
  .................................................................................
  dashboard.apollo : graphql api status provide by apollo engine
                   | https://engine.apollographql.com/account/gh.mydearxym/services
  .................................................................................
  .................................................................................
  dashboard.aliyun : aliyun console
                   | https://home.console.aliyun.com/new
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid ci commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ci.build      : browse travis status
                | https://travis-ci.org/coderplanets/coderplanets_web
  ..........................................................................
  ci.coverage   : browse test coveralls status
                | https://coveralls.io/github/coderplanets/coderplanets_web
  ..........................................................................
  ci.codecov    : browse test codecov status
                | https://codecov.io/gh/coderplanets/coderplanets_web
  ..........................................................................
  ci.codefactor : improve code quality
                | https://www.codefactor.io/repository/github/coderplanets/coderplanets_web
  ..........................................................................
  ci.codacy     : improve code quality 2
                | https://app.codacy.com/project/mydearxym/coderplanets_web/dashboard?branchId=8274848
  ..........................................................................
  ci.depsbot    : check outdated deps
                | wip: https://david-dm.org/coderplanets/coderplanets_web
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid github commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  github.code      : browse source code in github
                   | https://github.com/coderplanets/coderplanets_web
  ....................................................................................
  github.doc       : browse repo docs in github
                   | https://github.com/coderplanets/coderplanets_web/tree/dev/docs
  ....................................................................................
  github.pr        : browse PRs in github
                   | https://github.com/coderplanets/coderplanets_web/pulls
  ....................................................................................
  github.issue     : browse issues in github
                   | https://github.com/coderplanets/coderplanets_web/issues
  ....................................................................................
  github.issue.new : create issue in github
                   | https://github.com/coderplanets/coderplanets_web/issues/new
  ....................................................................................
  github.app       : github oauth status (need login)
                   | https://github.com/settings/applications/689577
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

