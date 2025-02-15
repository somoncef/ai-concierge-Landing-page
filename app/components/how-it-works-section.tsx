"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

const steps = [{ key: "step1" }, { key: "step2" }, { key: "step3" }, { key: "step4" }]

export default function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("howItWorks.title")}
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary" />

          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 px-4">
                <div className={`bg-card p-6 rounded-lg shadow-lg ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{t(`howItWorks.${step.key}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`howItWorks.${step.key}.description`)}</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="w-1/2 px-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

