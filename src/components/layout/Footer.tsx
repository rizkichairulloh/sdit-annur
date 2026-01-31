"use client"

import * as React from "react"
import { useTranslations } from "next-intl"

export function Footer() {
  return (
    <footer className="border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} SDIT Annur. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
