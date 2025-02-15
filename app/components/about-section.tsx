"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "../contexts/language-context"

const features = [
  { key: "feature1", icon: "🧠" },
  { key: "feature2", icon: "🌍" },
  { key: "feature3", icon: "🕒" },
  { key: "feature4", icon: "🔗" },
]

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("about.title")}
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="AI Concierge in action"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <div className="lg:w-1/2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {feature.icon} {t(`about.${feature.key}.title`)}
                </h3>
                <p className="text-muted-foreground">{t(`about.${feature.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

