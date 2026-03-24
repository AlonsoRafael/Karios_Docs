"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dra. Ana Paula Silva",
      role: "Psicóloga Clínica",
      image: "APS",
      rating: 5,
      text: "Os documentos são impecáveis! A qualidade do material e a elegância do design transformaram completamente a impressão que meus pacientes têm do meu trabalho. Recomendo muito!",
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Psicólogo Organizacional",
      image: "CM",
      rating: 5,
      text: "Finalmente encontrei modelos profissionais e bem elaborados. O contrato revisado juridicamente me deu muita segurança. Valeu cada centavo!",
    },
    {
      name: "Dra. Juliana Costa",
      role: "Psicóloga Infantil",
      image: "JC",
      rating: 5,
      text: "Adorei o manual da terapia! Meus pacientes se sentem muito mais acolhidos e o PDF de apresentação facilita muito na hora de explicar meu trabalho. Excelente investimento!",
    },
    {
      name: "Dra. Mariana Santos",
      role: "Psicóloga e Coach",
      image: "MS",
      rating: 5,
      text: "A facilidade de editar tudo no Canva é fantástica! Personalizei com minhas cores e logo em minutos. Os documentos são muito bem escritos e profissionais.",
    },
    {
      name: "Dr. Rafael Oliveira",
      role: "Psicólogo Clínico",
      image: "RO",
      rating: 5,
      text: "Pack completo e de altíssima qualidade. Economizei horas de trabalho e ainda consegui elevar o padrão de apresentação da minha clínica. Muito satisfeito!",
    },
    {
      name: "Dra. Fernanda Lima",
      role: "Psicóloga",
      image: "FL",
      rating: 5,
      text: "Material impecável! A entrega foi instantânea e o suporte por email foi muito atencioso. Todos os documentos que eu precisava em um só lugar. Perfeito!",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
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
            O que estão falando sobre{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              nossos packs
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que profissionais da saúde estão dizendo
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Profissionais Satisfeitos" },
            { number: "5.0", label: "Avaliação Média" },
            { number: "98%", label: "Taxa de Satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
