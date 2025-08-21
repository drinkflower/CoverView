import { useTranslation } from 'react-i18next'
import logo from '@/assets/images/logo.png'
import SwitchLang from '@/components/SwitchLang'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-indigo-50/80 text-xl flex border-b border-indigo-50 p-2 w-full md:px-32">
      <div className="flex items-center">
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold md:text-xl text-lg font-Inter">CoverView</h1>
      </div>
      
      <SwitchLang />
    </header>
  )
}

export default Header
