"use client"

import { useTranslations } from "next-intl"
import { FadeIn } from "@/components/animations/MotionWrappers"
import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react"

export function Contact() {
  const t = useTranslations('ContactSection')

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t" id="contact">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                     <h3 className="font-semibold mb-1">{t('address_label')}</h3>
                     <p className="text-muted-foreground">{t('address_value')}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                     <h3 className="font-semibold mb-1">{t('whatsapp_label')}</h3>
                     <p className="text-muted-foreground mb-3">+62 857-4313-8084 (Bintang AP)</p>
                     <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                        <a href="https://wa.me/6285743138084" target="_blank" rel="noopener noreferrer">
                           {t('whatsapp_cta')}
                        </a>
                     </Button>
                  </div>
               </div>
            </div>
          </FadeIn>

          {/* Map Placeholder */}
          <FadeIn delay={0.2} className="h-full min-h-[300px] bg-muted rounded-2xl overflow-hidden border relative">
             <iframe 
                src="https://www.google.com/maps?q=-7.6055265,110.6723223&hl=id&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
             />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
