"use client"

import { useTranslations } from "next-intl"
import { FadeIn, SlideUp } from "@/components/animations/MotionWrappers"
import { BookOpen, Sun, Moon, Heart, Users, Trophy, MessageCircle, Star } from "lucide-react"

export function Programs() {
  const t = useTranslations('ProgramsSection')

  const religiousItems = [
    { icon: <Sun className="h-5 w-5 text-amber-500" />, key: "morning" },
    { icon: <BookOpen className="h-5 w-5 text-blue-500" />, key: "general" },
    { icon: <Star className="h-5 w-5 text-yellow-500" />, key: "afternoon" },
    { icon: <Moon className="h-5 w-5 text-indigo-500" />, key: "prayer" },
    { icon: <MessageCircle className="h-5 w-5 text-green-500" />, key: "language" },
    { icon: <Heart className="h-5 w-5 text-red-500" />, key: "character" },
    { icon: <Trophy className="h-5 w-5 text-orange-500" />, key: "sports" },
  ]

  return (
    <section className="py-20 bg-sky-50 dark:bg-muted/30" id="programs">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Academic Section */}
          <SlideUp delay={0.1} className="h-full">
            <div className="bg-background rounded-3xl p-8 shadow-lg border border-border/50 h-full hover:border-primary/50 transition-colors">
               <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <BookOpen className="h-7 w-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">{t('academic_title')}</h3>
               <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('academic_desc')}
               </p>
               <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Matematika</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">IPA/Sains</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Bahasa Indonesia</span>
               </div>
            </div>
          </SlideUp>

          {/* Religious & Character Section */}
          <SlideUp delay={0.2} className="h-full">
            <div className="bg-background rounded-3xl p-8 shadow-lg border border-border/50 h-full hover:border-secondary/50 transition-colors">
               <div className="bg-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-secondary dark:text-secondary-foreground">
                  <Star className="h-7 w-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">{t('religious_title')}</h3>
               <p className="text-muted-foreground mb-6">
                  {t('religious_desc')}
               </p>
               
               <div className="space-y-4">
                  {religiousItems.map((item, idx) => (
                    <div key={item.key} className="flex items-start gap-3 group">
                       <div className="mt-1 flex-shrink-0 bg-muted p-1.5 rounded-lg group-hover:bg-background group-hover:shadow-sm transition-all">
                          {item.icon}
                       </div>
                       <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors">
                          {t(`items.${item.key}`)}
                       </span>
                    </div>
                  ))}
               </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
