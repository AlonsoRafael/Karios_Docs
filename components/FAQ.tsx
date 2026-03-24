'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como vou ter acesso ao meu pack?',
      answer:
        'Após finalizar o pagamento, você receberá automaticamente um email da Hotmart, com o acesso à plataforma com aula ensinando o passo a passo para copiar os documentos e legendas para sua conta do Canva.',
    },
    {
      question: 'É seguro comprar?',
      answer:
        'Sim, é totalmente seguro comprar. A Hotmart é uma das maiores e mais seguras plataformas de produtos digitais do Brasil, com certificação SSL e proteção de dados.',
    },
    {
      question: 'Posso modificar os documentos do Canva com minhas cores?',
      answer:
        'Sim! Os documentos são 100% editáveis. Você poderá personalizar com sua paleta de cores, fontes e logotipo. Tudo é totalmente customizável.',
    },
    {
      question: 'Preciso do Canva pago?',
      answer:
        'Não, você pode editar todos os documentos utilizando a versão gratuita do Canva. Todos os templates foram criados pensando nisso.',
    },
    {
      question: 'Para quais profissionais serve?',
      answer:
        'Este pack foi desenvolvido especialmente para profissionais da área da saúde mental: psicólogos, psicólogas e terapeutas que buscam documentos profissionais e elegantes.',
    },
    {
      question: 'Vou receber os documentos já prontos?',
      answer:
        'Sim! Todos os templates já vêm prontos e preenchidos com textos profissionais. Mas você pode editá-los 100% caso queira personalizar o conteúdo.',
    },
    {
      question: 'Quando terei acesso aos meus documentos?',
      answer:
        'Nos casos de pagamento em cartão de crédito e PIX, o acesso é enviado para o email cadastrado no ato da compra e chega em alguns minutos (geralmente instantâneo) após a confirmação do pagamento.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Sim! Você tem 7 dias de garantia incondicional. Se não gostar do produto, devolvemos 100% do seu dinheiro sem perguntas.',
    },
    {
      question: 'Posso usar em formato digital e impresso?',
      answer:
        'Sim! Os documentos estão otimizados tanto para uso digital (envio por email, WhatsApp) quanto para impressão em alta qualidade.',
    },
    {
      question: 'Vou receber atualizações futuras?',
      answer:
        'Sim! Quando houver atualizações nos templates ou novos documentos adicionados ao pack, você receberá acesso gratuito a todas as novidades.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas as suas dúvidas sobre o pack
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 text-left transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 pr-8 group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-200">
            <p className="text-lg text-gray-700 mb-4">
              Ainda tem dúvidas?{' '}
              <strong className="text-primary-700">Entre em contato!</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Responderemos todas as suas perguntas por email
            </p>
            <a
              href="mailto:contato@kairosdocs.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Enviar E-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
