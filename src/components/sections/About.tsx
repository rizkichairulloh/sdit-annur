"use client"

import { useTranslations } from "next-intl"
import { FadeIn, SlideUp } from "@/components/animations/MotionWrappers"
import { BookOpen, Heart, Star } from "lucide-react"
import { Counter } from "@/components/animations/Counter"

export function About() {
  const t = useTranslations('AboutSection')

  const values = [
    {
      icon: <Star className="h-8 w-8 text-secondary" />,
      title: t('value_1_title'),
      description: t('value_1_desc')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: t('value_2_title'),
      description: t('value_2_desc')
    },
    {
      icon: <Heart className="h-8 w-8 text-accent-foreground" />,
      title: t('value_3_title'),
      description: t('value_3_desc')
    }
  ]

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
               {t('title')}
             </h2>
             <p className="text-lg text-muted-foreground">
               {t('description')}
             </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all text-center group hover:-translate-y-1">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Stats Counters */}
        {/* <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter value={532} label={t('stats_students')} suffix="+" />
            <Counter value={45} label={t('stats_teachers')} />
            <Counter value={15} label={t('stats_activities')} />
            <Counter value={120} label={t('stats_awards')} suffix="+" />
        </div> */}
      </div>
    </section>
  )
}
