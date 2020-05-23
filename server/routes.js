//

const router = require('express').Router()
const R = require('ramda')

const app = require('./app')
const { renderAndCache } = require('./helper')

const handle = app.getRequestHandler()

const HOME_PAGE = '/home/posts'

router.route('/_next/:page?').get((req, res) => handle(req, res))

router
  .route('/service-worker.js')
  .get((req, res) => res.sendFile('.next/service-worker.js', { root: '.' }))

// oauth popup window
router.route('/oauth/').get((req, res) => renderAndCache({ req, res }))

// // tmp
// server.get('/editor', (req, res) =>
//   app.render(req, res, '/editor', req.query)
// )

// // sentry test
// server.get('/sentry/', (req, res) => renderAndCache({ req, res }))

router.route('/').get((req, res) => res.redirect(HOME_PAGE))

// 来一杯
router.route('/have-a-drink/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/have-a-drink' })
})

// 热点
router.route('/trending/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/trending' })
})

// 赞助与广告
router.route('/sponsor/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/sponsor' })
})

// 代码片段
router.route('/recipes/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/recipes' })
})

// 面经
router.route('/interview/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/interview' })
})

// 活动
router.route('/meetups/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/meetups' })
})

// 酷导游
router.route('/cool-guide/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/cool-guide' })
})

// 作品集市
router.route('/works/:slug?').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/works' })
})

// 用户页
router.route('/user/:userId').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/user' })
})

// 帖子页
router.route('/:community/post/:id').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/post' })
})

// job 帖子页
router.route('/:community/job/:id').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/job' })
})

// video 帖子页
router.route('/:community/video/:id').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/video' })
})

// repo 帖子页
router.route('/:community/repo/:id').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/repo' })
})

// 创建新社区
router.route('/communities/new').get((req, res) => {
  return renderAndCache({ req, res })
})
// 所有社区
router.route('/communities').get((req, res) => res.redirect('/communities/pl'))

router.route('/communities/:category').get((req, res) => {
  return renderAndCache({ req, res, pagePath: '/communities' })
})

// 社区主页
router.route('/:community/:thread').get((req, res) => {
  if (
    R.has('preview', req.query) &&
    R.has('id', req.query) &&
    R.has('community', req.query)
  ) {
    const { community, preview, id } = req.query
    return res.redirect(`/${community}/${preview}/${id}`)
  }

  return renderAndCache({ req, res, pagePath: '/community' })
})

router.route('*').get((req, res) => handle(req, res))

module.exports = router
