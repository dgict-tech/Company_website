import { motion } from "framer-motion"
import { ArrowRight, Code2, Smartphone, Zap } from "lucide-react"

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div
      id="home"
      className="bg-[#42b55e] px-6 md:px-24 pt-16 md:pt-20 pb-20 md:pb-32 flex items-center overflow-hidden relative"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-black/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
            <motion.div variants={fadeUp} className="inline-block mb-12 md:mb-6">
              <span className="bg-white/20 text-black px-4 md:px-4 py-3 md:py-2 rounded-full font-semibold">
                Welcome to DGICT!
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance mb-8"
            >
              YOU WANT IT,
              <span className="lg:bg-gradient-to-r lg:from-white lg:to-[#f6ee8f] lg:bg-clip-text lg:text-transparent">
                 WE'LL BUILD IT!
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg leading-snug">
              We create responsive websites, mobile apps, and enterprise-grade software. delivering innovative digital solutions and expert tech consultation for your business.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-4">
              <a
                href="#contact"
                className="bg-black text-[#42b55e] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-black/30 transition-all duration-300 flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#works"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </a>
            </motion.div>

            {/* <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <p className="text-white/80 text-sm">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f6ee8f]">98%</div>
                <p className="text-white/80 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">8+</div>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full min-h-96 md:min-h-[500px] hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#f6ee8f]/30 rounded-3xl blur-2xl"></div>

            <div className="relative h-full">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-10 left-0 bg-white/90 backdrop-blur border border-white/30 rounded-2xl p-6 w-72 shadow-xl hover:shadow-black/20 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="text-[#42b55e]" size={28} />
                  <h3 className="text-[#42b55e] font-bold text-lg">Web Development</h3>
                </div>
                <p className="text-gray-700 text-sm">Responsive, scalable websites</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                className="absolute top-44 right-0 bg-white/90 backdrop-blur border border-[#f6ee8f]/50 rounded-2xl p-6 w-72 shadow-xl hover:shadow-black/20 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="text-[#f6ee8f]" size={28} />
                  <h3 className="text-[#42b55e] font-bold text-lg">Mobile Apps</h3>
                </div>
                <p className="text-gray-700 text-sm">iOS & Android applications</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                className="absolute bottom-12 left-12 bg-white/90 backdrop-blur border border-white/30 rounded-2xl p-6 w-72 shadow-xl hover:shadow-black/20 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-[#42b55e]" size={28} />
                  <h3 className="text-[#42b55e] font-bold text-lg">Software Solutions</h3>
                </div>
                <p className="text-gray-700 text-sm">Enterprise & custom software</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
