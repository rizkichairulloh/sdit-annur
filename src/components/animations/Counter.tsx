"use client"

import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function Counter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => Math.round(current))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [spring, value, isInView])

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-center">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
