"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("cta.title")}
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-primary-foreground/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("cta.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="mr-4 bg-white text-primary hover:bg-gray-100">
            {t("cta.getStarted")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            {t("cta.bookDemo")}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

