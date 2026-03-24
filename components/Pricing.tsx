"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useEffect } from "react";

export default function Pricing() {
  const products = [
    {
      title: "Kit Completo de Documentos Clínicos",
      benefits: [
        "Ficha de Anamnese Adulto",
        "Contrato Terapêutico",
        "Termo de Consentimento",
        "Ficha de Evolução de Sessão",
        "Declaração de Comparecimento",
        "Encaminhamento Psicológico",
        "Relatório Psicológico (Simples)",
        "Relatório Psicológico (Completo)",
        "Ficha de Anamnese Infantil",
        "Ficha de Anamnese com Responsáveis",
        "Contrato Terapêutico Infantil",
        "Termo de Consentimento (Pais/Responsáveis)",
        "Ficha de Evolução de Sessão Infantil",
        "Declaração de Comparecimento (Responsáveis)",
        "Encaminhamento Psicológico Infantil",
        "Relatório Psicológico Infantil (Simples)",
        "Relatório Psicológico Infantil (Completo)",
        "100% Editável no Canva (Grátis)",
        "Acesso Imediato após Pagamento",
        "Atualizações Futuras Incluídas",
        "Suporte por E-mail",
      ],
      oldPrice: "R$ 157,00",
      price: "79",
      cents: "99",
      installments: "10x",
      hotmartLink: "https://pay.hotmart.com/S103627271L?checkoutMode=2",
      gradient: "from-primary-600 to-accent-600",
    },
  ];

  useEffect(() => {
    // Load Hotmart script
    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      id="preco"
      className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-accent-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-medium">Oferta Especial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Escolha o kit perfeito para sua prática
          </h2>
          <p className="text-xl text-white/90">
            Investimento único. Benefícios para toda sua carreira.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {products.map((product, productIndex) => (
            <motion.div
              key={productIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: productIndex * 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Product Title Badge */}
                <div
                  className={`bg-gradient-to-r ${product.gradient} text-white py-4 px-8 text-center`}
                >
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                </div>

                <div className="grid md:grid-cols-2">
                  {/* Left Side - Benefits */}
                  <div className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">
                      Tudo que você recebe:
                    </h4>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <div className="min-w-[24px] mt-0.5">
                            <Check className="w-6 h-6 text-green-500" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {benefit}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Trust Badges */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-primary-600" />
                          <span>Acesso imediato</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Pagamento seguro</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Price */}
                  <div
                    className={`p-8 md:p-10 bg-gradient-to-br ${product.gradient} text-white flex flex-col justify-center`}
                  >
                    <div className="text-center mb-8">
                      <div className="mb-4">
                        <span className="text-6xl font-bold">
                          R$ {product.price}
                        </span>
                        <span className="text-2xl">,{product.cents}</span>
                      </div>
                      <p className="text-white/90 text-lg">
                        ou até em {product.installments}
                      </p>
                    </div>

                    {/* CTA Button with Hotmart */}
                    <a
                      onClick={() => false}
                      href={product.hotmartLink}
                      className="hotmart-fb hotmart__button-checkout custom-buy-button group"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        background: "#22c55e",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        padding: "1rem 2.5rem",
                        borderRadius: "9999px",
                        textDecoration: "none",
                        boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                        transition: "all 0.3s ease",
                        border: "none",
                        gap: "0.75rem",
                      }}
                    >
                      <span>COMPRAR AGORA</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>

                    {/* Guarantee */}
                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Check className="w-4 h-4" />
                        <span className="text-sm">Garantia de 7 dias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 text-lg">
            Investimento que se paga na primeira semana de uso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
