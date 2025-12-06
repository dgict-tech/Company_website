import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#42b55e]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6ee8f]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#42b55e]/30 to-[#f6ee8f]/20 rounded-3xl blur-2xl"></div>
            <img src="/images/dan_pic.png" alt="About DGICT" className="relative w-full rounded-3xl shadow-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 space-y-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#42b55e] mb-2">About Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#42b55e] to-[#f6ee8f]"></div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            At DGICT, we accelerate our development process to align perfectly with your goals—delivering
            high-performance applications while ensuring every platform we build is secure, scalable, and reliable for
            your daily operations.
          </p>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <CheckCircle className="text-[#42b55e] flex-shrink-0 w-6 h-6 mt-0.5" />
              <p className="text-gray-700">Innovative technology solutions tailored to your business</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <CheckCircle className="text-[#42b55e] flex-shrink-0 w-6 h-6 mt-0.5" />
              <p className="text-gray-700">Practical, intuitive design with strong UX principles</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <CheckCircle className="text-[#42b55e] flex-shrink-0 w-6 h-6 mt-0.5" />
              <p className="text-gray-700">Secure, scalable, and future-proof solutions</p>
            </motion.div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed pt-4">
            Innovation drives us. We are passionate about solving real-world problems through technology and turning
            ideas into reliable, impactful digital products built for the future.
          </p>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#42b55e] to-[#3a9a4d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#42b55e]/50 transition-all duration-300 mt-6"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
