import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f43edaad-045f-4256-a3d6-4a80da4e3c17");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success"
      });
    }
    setName('')
    setEmail('')
    setMessage('')
  };


  return (
    <section id="contact" className="bg-[#42b55e] py-20 px-6 md:px-16 text-black">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-black/90 mb-8">
            Have a project or idea? We'd love to hear from you. Reach out using the form
            or contact us directly.
          </p>
          <ul className="space-y-4 text-black/90">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-black text-xl" />
              <span>dgictech@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-black text-xl" />
              <span>+234 902 6752 559</span>
            </li>
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-black text-xl" />
              <span>Abuja, Nigeria</span>
            </li>
          </ul>
        </div>

        <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl p-6 shadow-lg space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            name="name" require
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42b55e]"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email" required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42b55e]"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message" required
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42b55e]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#42b55e] text-black hover:bg-green-600 transition font-semibold px-6 py-3 rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
