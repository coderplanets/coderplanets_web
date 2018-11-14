const DEFAULT_BASE = 4000
// const CHANGESET_BASE = 4100
const THROTTLE_BASE = 4200
// const ACCOUNT_BASE = 4300

const convertToErrorMsg = errCode => {
  switch (errCode) {
    case DEFAULT_BASE + 3: {
      return '不存在'
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

export const holder = 1
