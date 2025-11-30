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
    At DGICT, we accelerate our development process to align perfectly with your goals—delivering
    high-performance applications while ensuring every platform we build is secure, scalable, and
    reliable for your daily operations.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed">
    We believe in making technology simple, no matter how complex your ideas or business workflows
    may be. Our team focuses on creating practical, intuitive, and seamless design flows paired with
    strong user experience principles, ensuring you get the best applications built for your business
    processes and digital vision.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed">
    Innovation drives us. We are passionate about solving real-world problems through technology—
    and when necessary, we collaborate with expert developers and partner teams to deliver solutions
    that are faster, more secure, and more powerful. At DGICT, we turn ideas into reliable, impactful
    digital products built for the future.
  </p>
</motion.div>

      </div>
    </section>
  );
}
