import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#42b55e]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#42b55e]/30 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/dan_pic.png"
            alt="About us"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#42b55e] mb-6">ABOUT US</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          We specialize in development of Mobile applications, Website applications, Desktop Applications, Crypto-Currencies, and Blockchain Technology-driven Systems.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
          We speed up our development process to meet up with your plans while creating a secured platform that is reliable for your operations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
          We love to make it simple, no matter how complex your ideas or business procedures are. We create a practical, easy, and seamless design flow with a sound user experience to get the best application for your businesses and ideas.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
          As a company, we are passionate about innovation and creativity. We love solving world problems even if it requires teaming up and connecting with other developers to make the development faster, more secure, and more powerful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
