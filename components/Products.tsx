'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, MouseEvent } from 'react'

export default function Products() {
  const products = [
    {
      modelNumber: 1,
      title: 'Kit Documentos Clínico Adulto',
      description:
        'Teremos 4 modelos de documentos essenciais para o dia a dia da sua clínica, todos personalizáveis e prontos para uso imediato. Os exemplos abaixo mostram somente a primeira página do modelo disponível no pack.',
      features: [
        'Ficha de Anamnese Adulto',
        'Contrato Terapêutico',
        'Termo de Consentimento ',
        'Ficha de Evolução de Sessão',
        'Declaração de Comparecimento',
        'Encaminhamento Psicológico',
        'Relatório Psicológico (Simples)',
        'Relatório Psicológico (Completo)',
      ],
      carousels: [
        {
          subtitle: 'Modelo 1',
          images: [
            '/modelo1/Modelo1-pg2.jpg',
            '/modelo1/Modelo1-pg6.jpg',
            '/modelo1/Modelo1-pg10.jpg',
            '/modelo1/Modelo1-pg13.jpg',
            '/modelo1/Modelo1-pg16.jpg',
            '/modelo1/Modelo1-pg18.jpg',
            '/modelo1/Modelo1-pg20.jpg',
            '/modelo1/Modelo1-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 2',
          images: [
            '/modelo2/Modelo2-pg2.jpg',
            '/modelo2/Modelo2-pg6.jpg',
            '/modelo2/Modelo2-pg10.jpg',
            '/modelo2/Modelo2-pg13.jpg',
            '/modelo2/Modelo2-pg16.jpg',
            '/modelo2/Modelo2-pg18.jpg',
            '/modelo2/Modelo2-pg20.jpg',
            '/modelo2/Modelo2-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 3',
          images: [
            '/modelo3/Modelo3-pg2.jpg',
            '/modelo3/Modelo3-pg6.jpg',
            '/modelo3/Modelo3-pg10.jpg',
            '/modelo3/Modelo3-pg13.jpg',
            '/modelo3/Modelo3-pg16.jpg',
            '/modelo3/Modelo3-pg18.jpg',
            '/modelo3/Modelo3-pg20.jpg',
            '/modelo3/Modelo3-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 4',
          images: [
            '/modelo4/Modelo4-pg2.jpg',
            '/modelo4/Modelo4-pg6.jpg',
            '/modelo4/Modelo4-pg10.jpg',
            '/modelo4/Modelo4-pg13.jpg',
            '/modelo4/Modelo4-pg16.jpg',
            '/modelo4/Modelo4-pg18.jpg',
            '/modelo4/Modelo4-pg20.jpg',
            '/modelo4/Modelo4-pg22.jpg',
          ]
        }
      ],
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      modelNumber: 2,
      title: 'Kit de Documentos Clínicos Infantil',
      description:
        'Todos os documentos que você precisa no dia a dia da clínica: declarações, atestados, encaminhamentos, termos e recibos.',
      features: [
        'Ficha de Anamnese Infantil',
        'Ficha de Anamnese com Responsáveis',
        'Contrato Terapêutico Infantil',
        'Termo de Consentimento Informado (Pais/Responsáveis)',
        'Ficha de Evolução de Sessão Infantil',
        'Declaração de Comparecimento (Responsáveis)',
        'Encaminhamento Psicológico Infantil',
        'Relatório Psicológico Infantil (Simples)',
        'Relatório Psicológico Infantil (Completo)',
        'Autorização para Contato com Escola e Rede de Apoio',
      ],
      carousels: [
        {
          subtitle: 'Modelo 1',
          images: [
            '/modelo1/Modelo1-pg2.jpg',
            '/modelo1/Modelo1-pg6.jpg',
            '/modelo1/Modelo1-pg10.jpg',
            '/modelo1/Modelo1-pg13.jpg',
            '/modelo1/Modelo1-pg16.jpg',
            '/modelo1/Modelo1-pg18.jpg',
            '/modelo1/Modelo1-pg20.jpg',
            '/modelo1/Modelo1-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 2',
          images: [
            '/modelo2/Modelo2-pg2.jpg',
            '/modelo2/Modelo2-pg6.jpg',
            '/modelo2/Modelo2-pg10.jpg',
            '/modelo2/Modelo2-pg13.jpg',
            '/modelo2/Modelo2-pg16.jpg',
            '/modelo2/Modelo2-pg18.jpg',
            '/modelo2/Modelo2-pg20.jpg',
            '/modelo2/Modelo2-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 3',
          images: [
            '/modelo3/Modelo3-pg2.jpg',
            '/modelo3/Modelo3-pg6.jpg',
            '/modelo3/Modelo3-pg10.jpg',
            '/modelo3/Modelo3-pg13.jpg',
            '/modelo3/Modelo3-pg16.jpg',
            '/modelo3/Modelo3-pg18.jpg',
            '/modelo3/Modelo3-pg20.jpg',
            '/modelo3/Modelo3-pg22.jpg',
          ]
        },
        {
          subtitle: 'Modelo 4',
          images: [
            '/modelo4/Modelo4-pg2.jpg',
            '/modelo4/Modelo4-pg6.jpg',
            '/modelo4/Modelo4-pg10.jpg',
            '/modelo4/Modelo4-pg13.jpg',
            '/modelo4/Modelo4-pg16.jpg',
            '/modelo4/Modelo4-pg18.jpg',
            '/modelo4/Modelo4-pg20.jpg',
            '/modelo4/Modelo4-pg22.jpg',
          ]
        }
      ],
      gradient: 'from-cyan-500 to-blue-600',
    },
  ]

  // Carousel component showing all images side by side
  const ProductCarousel = ({ images, title }: { images: string[]; title: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      if (!scrollRef.current) return
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollRef.current) return
      e.preventDefault()
      const x = e.pageX - scrollRef.current.offsetLeft
      const walk = (x - startX) * 2 // Multiplica por 2 para scroll mais rápido
      scrollRef.current.scrollLeft = scrollLeft - walk
    }

    return (
      <div className="relative w-full py-8">
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`overflow-x-scroll overflow-y-hidden pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'thin' }}
        >
          <div className="flex items-center gap-4 md:gap-6 px-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative flex-shrink-0"
              >
                {/* Just the Image with shadow */}
                <div className="relative w-[250px] md:w-[300px] rounded-xl overflow-hidden shadow-2xl bg-white">
                  <Image
                    src={image}
                    alt={`${title} - Documento ${index + 1}`}
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover select-none"
                    draggable={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span>←</span>
            <span>Arraste para ver todos os documentos</span>
            <span>→</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              O que você vai receber
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Veja tudo o que você terá acesso
          </h2>
          <p className="text-xl text-gray-600">
            Pack completo com todos os documentos essenciais para elevar sua
            prática profissional
          </p>
        </motion.div>

        {/* Products List with Carousels */}
        <div className="max-w-7xl mx-auto space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content Section */}
              <div className="p-8 md:p-12 text-center">
                {/* Title with gradient - no badge */}
                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 bg-clip-text text-transparent leading-tight">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-4 max-w-4xl mx-auto">
                  {product.description}
                </p>

                <p className="text-sm text-gray-500 italic mb-8">
                  Disponível em versão para uso digital e impressão.
                </p>

                {/* Multiple Carousels for all models */}
                {product.carousels ? (
                  <div className="space-y-16">
                    {product.carousels.map((carousel, carouselIndex) => (
                      <div key={carouselIndex}>
                        <div className="flex items-center justify-center mb-8">
                          {/* Subtitle with gradient */}
                          <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 bg-clip-text text-transparent">
                            {carousel.subtitle}
                          </h4>
                        </div>
                        <ProductCarousel images={carousel.images} title={`${product.title} - ${carousel.subtitle}`} />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Features below carousel */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 p-1 rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-xl">
              <p className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Tudo isso 100% editável pelo Canva
                </span>
              </p>
              <p className="text-gray-600">
                Mude cores, fontes e tudo o que desejar! Não precisa do Canva pago.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
