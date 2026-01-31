"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  const toggleLanguage = () => {
    const nextLocale = locale === 'id' ? 'en' : 'id'
    router.replace(pathname, {locale: nextLocale})
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} className="font-semibold w-12">
        {locale.toUpperCase()}
    </Button>
  )
}
