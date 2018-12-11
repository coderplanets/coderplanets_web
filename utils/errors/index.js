import R from 'ramda'

const DEFAULT_BASE = 4000
// const CHANGESET_BASE = 4100
const THROTTLE_BASE = 4200
const ACCOUNT_BASE = 4300

// spec error
const LOGIN_ERROR = ACCOUNT_BASE + 1

const convertToErrorMsg = errCode => {
  switch (errCode) {
    case DEFAULT_BASE + 3: {
      return '不存在'
    }
    case DEFAULT_BASE + 11: {
      return '存在未处理订单'
    }
    case LOGIN_ERROR: {
      return '需要登陆'
    }
    case THROTTLE_BASE + 1:
    case THROTTLE_BASE + 2:
    case THROTTLE_BASE + 3: {
      return '为防止灌水，发帖间歇不得小于3分钟，20帖/小时, 30帖/天'
    }
    default: {
      return '出错了，请稍后重试'
    }
  }
}

export const errorForHuman = details => {
  const errCode = details[0].code

  return convertToErrorMsg(errCode)
}

const checkLoginError = errors =>
  !!(R.find(R.propEq('code', LOGIN_ERROR))(errors) || false)

export const ssrAmbulance = {
  hasLoginError: checkLoginError,
}
