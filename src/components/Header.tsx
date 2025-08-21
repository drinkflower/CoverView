import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import logo from '@/assets/images/logo.png'
import { scrollToTop } from '@/common/utils'
import SwitchLang from './SwitchLang'

function Header() {
  const { t } = useTranslation()
  const tweetText = encodeURIComponent(t('home.tweetText'))

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-indigo-50/80 text-xl px-4 py-2 flex border-b border-indigo-100 w-full">
      <Link className="flex items-center" to="/" onClick={scrollToTop}>
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold">CoverView</h1>
      </Link>

      <div className="flex items-center md:gap-4 gap-2 ml-auto md:mr-4">

        <SwitchLang />
      </div>
    </header>
  )
}

export default Header
