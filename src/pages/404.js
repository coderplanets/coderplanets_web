import CrashErrorHint from '@/components/CrashErrorHint'

export default function Custom404() {
  return (
    <div>
      todo: custom 404 page
      <CrashErrorHint onReport={console.log} />
    </div>
  )
}
