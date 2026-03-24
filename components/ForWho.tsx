'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'

export default function ForWho() {
  const problems = [
    'Não tem material de acolhimento profissional',
    'Cansada de modelos mal escritos e mal diagramados',
    'Sente dificuldade para elaborar documentos técnicos',
    'Não tem prontuário completo e organizado',
    'Quer transmitir elegância e profissionalismo',
  ]

  const benefits = [
    {
      title: 'Economize Tempo',
      description: 'Documentos prontos e editáveis para usar imediatamente',
    },
    {
      title: 'Impressione Pacientes',
      description: 'Design profissional que transmite confiança e credibilidade',
    },
    {
      title: 'Conformidade Legal',
      description: 'Modelos elaborados seguindo normas e boas práticas',
    },
    {
      title: 'Totalmente Editável',
      description: 'Personalize com suas informações em poucos minutos',
    },
  ]

  return (
    <section id="para-quem" className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Para Profissionais da Saúde</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
            Transforme sua{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 bg-clip-text text-transparent">
              Prática Clínica
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Documentos profissionais, elegantes e prontos para usar. 
            Dedique seu tempo ao que realmente importa: <strong className="text-primary-700">seus pacientes</strong>.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems - Left Side */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 w-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Você se identifica com isso?
              </h3>
              <div className="space-y-4 flex-grow">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits - Right Side */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 shadow-xl text-white w-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">
                Com o Kairós Docs você terá:
              </h3>
              <div className="space-y-6 flex-grow">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-7 h-7 flex-shrink-0 text-accent-200" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-primary-100 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
