import { motion } from "framer-motion"
import { useState } from "react"
import Swal from "sweetalert2"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "f43edaad-045f-4256-a3d6-4a80da4e3c17")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
      })
    }
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section
      id="contact"
      className="bg-[#42b55e] py-20 px-6 md:px-16 text-white relative overflow-hidden"
    >


      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Have a project or idea? We'd love to hear from you. Reach out using the form below or contact us directly.
          </p>
          <ul className="space-y-4 text-black/90">
            <li className="flex items-center gap-3">
              <Mail className="text-black w-5 h-5" />
              <span>dgictech@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
            <Phone className="text-black w-5 h-5" />
              <span>+234 902 6752 559</span>
            </li>
            <li className="flex items-center gap-3">
            <MapPin className="text-black w-5 h-5" />
              <span> Plot 50 Joseph Uzor Lane, Nnaaki FLT 2, Kubwa, Abuja, Nigeria</span>
            </li>
          </ul>
       </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4 p-6 rounded-xl bg-black border border-gray-700 hover:border-[#42b55e]/50 transition-colors"
                whileHover={{ translateY: -2 }}
              >
                <Mail className="text-[#42b55e] flex-shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:dgictech@gmail.com" className="text-gray-300 hover:text-[#42b55e] transition">
                    dgictech@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-xl bg-black border border-gray-700 hover:border-[#42b55e]/50 transition-colors"
                whileHover={{ translateY: -2 }}
              >
                <Phone className="text-[#f6ee8f] flex-shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+2349026752559" className="text-gray-300 hover:text-[#f6ee8f] transition">
                    +234 902 6752 559
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-xl bg-black border border-gray-700 hover:border-[#42b55e]/50 transition-colors"
                whileHover={{ translateY: -2 }}
              >
                <MapPin className="text-[#42b55e] flex-shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300"> Plot 50 Joseph Uzor Lane, Nnaaki FLT 2, Kubwa,  Abuja, Nigeria</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="bg-white backdrop-blur border border-gray-300 rounded-2xl p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-white p-4 rounded-lg bg-white border border-gray-300 focus:border-[#42b55e] focus:outline-none transition placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-white p-4 rounded-lg bg-white border border-gray-300 focus:border-[#42b55e] focus:outline-none transition placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-white p-4 rounded-lg bg-white border border-gray-300 focus:border-[#42b55e] focus:outline-none transition placeholder-gray-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full lg:bg-gradient-to-r lg:from-[#42b55e] lg:to-[#3a9a4d] text-white hover:to-[#2d7a3b] bg-[#42b55e] transition font-semibold px-6 py-3 rounded-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
