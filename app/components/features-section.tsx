"use client"

import { motion } from "framer-motion"
import { Globe, Calendar, MessageSquare, Zap } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "../contexts/language-context"

const featureIcons = [Globe, Calendar, MessageSquare, Zap]

export default function FeaturesSection() {
  const { t } = useLanguage()
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("features.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((index) => {
            const Icon = featureIcons[index]
            return (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer 
                  ${
                    activeFeature === index
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-card hover:shadow-xl hover:scale-105"
                  }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon
                  className={`w-12 h-12 mb-4 ${activeFeature === index ? "text-primary-foreground" : "text-primary"}`}
                />
                <h3 className="text-xl font-semibold mb-2">{t(`features.${index}.title`)}</h3>
                <p className={activeFeature === index ? "text-primary-foreground/90" : "text-muted-foreground"}>
                  {t(`features.${index}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="mt-16 p-8 bg-card rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">{t(`features.${activeFeature}.title`)}</h3>
          <p className="text-muted-foreground">{t(`features.${activeFeature}.description`)}</p>
        </motion.div>
      </div>
    </section>
  )
}

