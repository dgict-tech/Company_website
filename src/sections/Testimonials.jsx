import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Keneth",
    title: "Founder of Posa",
    quote:
      "Thanks to DGICT, i am able to have a Mobile App that is reliable and also meet my Costumers needs.",
    image: "/images/keneth_pic.jpeg",
  },
  {
    name: "Ola Oliver",
    title: "Founder at BlockProperty",
    quote:
      "Creating Blockchains, securing NFTs and contracts isn't an easy task,but thanks to DGICT it has been easier and better",
    image: "/images/ola_pic.jpeg",
  },
  {
    name: "Enabu Bukola",
    title: "Enterprenuer",
    quote:
      "DGICT is vested in our succes that is why we want to work and partner even further. We value their software technology, reliability, and easy to use platforms",
    image: "/images/buk_pic.jpeg",
  },
  {
    name: "Jerimiah Orifa",
    title: "Founder at ActiveX Token",
    quote:
      "DGICT is the real deal in BlockChain Technology. I enjoyed their services all through the development of ATX, and i believe you will too",
    image: "/images/jea_pic.jpeg",
  },
  {
    name: "Jephtah Fashola",
    title: "Enterprenuer.",
    quote:
      "I use DGICT Website Applications and it has really made work easier for me, it is very interactive and innovative",
    image: "/images/jeph_pic.jpeg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function TestimonialSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#42b55e] mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 text-lg">Trusted by forward-thinking businesses across industries.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-[#111] rounded-xl shadow-lg p-6 relative group hover:shadow-2xl transition duration-300 border border-[#2e2e2e]"
          >
            <FontAwesomeIcon icon={faQuoteLeft} className="text-[#42b55e] text-2xl mb-4" />
            <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#42b55e]"
              />
              <div>
                <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
