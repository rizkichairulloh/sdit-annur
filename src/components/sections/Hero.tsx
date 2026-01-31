"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideUp } from "@/components/animations/MotionWrappers"
import { ArrowRight, School } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const t = useTranslations('HomePage')

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-sky-50 dark:bg-background pt-16">
      {/* Background Decor - Clouds/Shapes could be added here */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
        <div className="absolute top-[40%] -left-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/5" />
      </div>

      <div className="container relative z-10 grid gap-8 px-4 md:grid-cols-2 md:items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <FadeIn>
             <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <School className="mr-2 h-4 w-4" />
                Islamic Integrated Elementary School
             </div>
          </FadeIn>
          
          <SlideUp delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              SD Islam Terpadu <span className="text-primary font-arabic leading-tight block mt-2">Annur</span>
            </h1>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:mx-0 md:text-xl">
              {t('subtitle')}
            </p>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              {/* <Button asChild size="lg" className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Link href="/admission">
                   {t('cta_admission')} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button> */}
              {/* <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-semibold">
                <Link href="/profile">
                   {t('cta_profile')}
                </Link>
              </Button> */}
            </div>
          </SlideUp>
        </div>

        {/* Illustration */}
        <FadeIn delay={0.4} className="relative mx-auto w-full max-w-[500px]">
           <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-800">
               <Image 
                 src="/images/hero_illustration.png" 
                 alt="SDIT Annur Students" 
                 width={500} 
                 height={500}
                 className="object-cover w-full h-full"
                 priority
               />
           </div>
           {/* Floating elements */}
           <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-white p-4 shadow-xl dark:bg-slate-800 animate-bounce delay-700">
                <div className="h-full w-full rounded-lg bg-accent/20 flex items-center justify-center text-3xl">📚</div>
           </div>
           <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-white p-3 shadow-xl dark:bg-slate-800 animate-bounce">
                <div className="h-full w-full rounded-full bg-secondary/20 flex items-center justify-center text-2xl">✨</div>
           </div>
        </FadeIn>
      </div>
    </section>
  )
}
