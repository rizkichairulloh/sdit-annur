"use client"

import { useTranslations } from "next-intl"
import { FadeIn, SlideUp } from "@/components/animations/MotionWrappers"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { Calendar, Wallet, Gift } from "lucide-react"

export function SPMBInfo() {
  const t = useTranslations('SPMBSection')

  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden" id="spmb">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                {t('title')} <span className="text-secondary block mt-2">{t('year')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8">
                    <a href="https://docs.google.com/forms/d/1O4pjhGsiKBCMnlAGMT3cwTxuSSses3xnINIOFaX47Rc/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
                      {t('cta_register')}
                    </a>
                 </Button>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <SlideUp delay={0.2}>
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-primary/20 flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Calendar className="h-8 w-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">{t('period_title')}</h3>
                    <p className="text-muted-foreground">{t('period_desc')}</p>
                 </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-secondary/20 flex items-start gap-4">
                 <div className="bg-secondary/10 p-3 rounded-xl text-secondary dark:text-secondary-foreground">
                    <Wallet className="h-8 w-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">{t('fee_title')}</h3>
                    <p className="text-muted-foreground">{t('fee_desc')}</p>
                    <p className="text-sm text-muted-foreground mt-2 italic">{t('fee_note')}</p>
                 </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-accent/20 flex items-start gap-4">
                 <div className="bg-accent/10 p-3 rounded-xl text-accent-foreground">
                    <Gift className="h-8 w-8 text-green-600" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">{t('benefits_title')}</h3>
                    <p className="text-muted-foreground">{t('benefit_free_items')}</p>
                 </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  )
}
