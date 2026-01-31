"use client"

import { useTranslations } from "next-intl"
import { FadeIn, ScaleIn } from "@/components/animations/MotionWrappers"
import { Bus, Landmark, Armchair } from "lucide-react"

export function Facilities() {
  const t = useTranslations('FacilitiesSection')

  const facilities = [
    { icon: <Armchair className="h-10 w-10 text-primary" />, key: "classroom" },
    { icon: <Bus className="h-10 w-10 text-secondary" />, key: "transport" },
    { icon: <Landmark className="h-10 w-10 text-accent-foreground" />, key: "mosque" },
  ]

  return (
    <section className="py-20 bg-background" id="facilities">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <ScaleIn key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border group h-full">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-center text-lg">
                  {t(`items.${item.key}`)}
                </h3>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
