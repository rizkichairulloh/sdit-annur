"use client"

import { useTranslations } from "next-intl"
import { FadeIn, SlideUp } from "@/components/animations/MotionWrappers"
import { FileText, CheckCircle2 } from "lucide-react"

export function Requirements() {
  const t = useTranslations('RequirementsSection')

  const requirements = [
    "form",
    "birth_certificate",
    "family_card",
    "photo"
  ]

  return (
    <section className="py-20 bg-background" id="requirements">
      <div className="container px-4 mx-auto">
         <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent-foreground mb-6">
                  <FileText className="h-8 w-8" />
               </div>
               <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
               <p className="text-muted-foreground">{t('subtitle')}</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-4">
               {requirements.map((req, index) => (
                  <SlideUp key={req} delay={index * 0.1}>
                     <div className="flex items-center p-4 rounded-xl bg-muted/30 border">
                        <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                        <span className="font-medium">{t(`items.${req}`)}</span>
                     </div>
                  </SlideUp>
               ))}
            </div>
         </div>
      </div>
    </section>
  )
}
