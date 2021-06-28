import { FC } from 'react'

const SvgComponent: FC = (props) => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M706.013 64.92c-3.43 0-332.133-.872-332.133-.872-58.564 0-110.34 47.603-110.34 105.236l-.369 6.744-31.98.771c-58.574 0-106.415 53.587-106.415 111.218v559.945c0 57.629 52.153 111.989 110.716 111.989h415.163c58.569 0 110.715-47.14 110.715-104.778v-7.52l27.687.31c58.554 0 110.7-54.35 110.7-112V288.677L706.014 64.92zm0 55.975v-.03l138.383 167.812h-83.025c-29.487 0-55.362-54.823-55.362-83.903.004-.001.004-29.458.004-83.879zm.244 731.733c0 28.52-26.545 64.901-55.601 64.901H235.494c-29.055 0-68.723-41.047-68.723-69.566V288.017c0-28.52 37.04-68.656 66.085-68.656l30.317-.91v517.522c0 57.638 52.144 111.988 110.708 111.988l332.376-.3v4.967zM857.76 735.963c0 28.53-39.66 69.577-68.703 69.577H360.51c-29.041 0-55.345-41.047-55.345-69.577V176.028c0-28.517 26.304-69.567 55.345-69.567h303.51c-.445 64.494 0 126.281 0 126.281 0 58.152 38.383 97.695 97.35 97.695h96.395v405.526h-.005zM706.013 456.489H456.92c-15.289 0-27.682 12.524-27.682 27.976 0 15.442 12.393 27.966 27.682 27.966h249.093c15.295 0 27.687-12.524 27.687-27.966 0-15.45-12.392-27.976-27.687-27.976zm0 139.856H456.92c-15.289 0-27.682 12.527-27.682 27.971s12.393 27.961 27.682 27.961h249.093c15.295 0 27.687-12.517 27.687-27.96s-12.392-27.972-27.687-27.972z" />
  </svg>
)

export default SvgComponent
