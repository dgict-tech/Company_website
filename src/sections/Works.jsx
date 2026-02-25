import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const works = [
  {
    title: "ActiveX Token",
    description: "Blockchain / Web3",
    image: "images/ActiveX_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/2.png",
    fullDescription: "A blockchain-based token platform with secure smart contracts and decentralized features.",
  },
  {
    title: "Smarthex Token",
    description: "Blockchain / Web3",
    image: "images/Smarthex_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/3.png",
    fullDescription: "Next-generation cryptocurrency token with advanced tokenomics and governance features.",
  },
  {
    title: "Panthers NFT",
    description: "Blockchain / Web3",
    image: "images/Panthers_nft_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/5.png",
    fullDescription: "Digital collectibles platform with unique NFT marketplace and community features.",
  },
  {
    title: "Maselly",
    description: "Website Application",
    image: "images/maselly_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/4.png",
    fullDescription: "E-commerce marketplace connecting sellers and buyers with advanced filtering.",
  },
  {
    title: "9property Real-estate",
    description: "Website Application",
    image: "images/property_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/6.png",
    fullDescription: "Comprehensive real estate platform with property listings and virtual tours.",
  },
  {
    title: "DSIGATE",
    description: "Website Application",
    image: "images/dsigate_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/7.png",
    fullDescription: "Secure gateway platform for transactions and data management.",
  },
  {
    title: "Gift Beyond Wealth",
    description: "Website Application",
    image: "images/giftbeyond_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/8.png",
    fullDescription: "Premium gifting platform with personalized recommendations and delivery tracking.",
  },
  {
    title: "Yoghurt Vest",
    description: "Website Application",
    image: "images/yoghurt_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/9.png",
    fullDescription: "Dairy investment and e-commerce platform for premium yogurt products.",
  },
  {
    title: "Virtual Homes Reality",
    description: "Blockchain / Web3",
    image: "images/Virtualhome_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/10.png",
    fullDescription: "Metaverse-based virtual real estate platform with blockchain ownership.",
  },
  {
    title: "Posa",
    description: "Website Application",
    image: "images/posa_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/posa.jpeg",
    fullDescription: "Mobile-first social platform for community engagement.",
  },
  {
    title: "Egde Deal",
    description: "Mobile Application",
    image: "images/edge_deal_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/edge_deal.jpeg",
    fullDescription: "Deal aggregation app connecting users with exclusive offers.",
  },
  {
    title: "The Wills",
    description: "Mobile Application",
    image: "images/thewills_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/thewills.jpeg",
    fullDescription: "Estate planning and legal documentation mobile application.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function Works() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div id="works" className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(66,181,94,0.15)]
 rounded-full blur-3xl -z-10"></div>

      <h1 className="absolute text-[60px] md:text-[110px] font-extrabold text-white/5 top-12 md:top-3 left-1/2 -translate-x-1/2 select-none">
        WORKS
      </h1>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">Our Works</h2>
        <hr className="w-16 m-auto mb-16 border-2 border-[#42b55e]" />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-[#42b55e]/50 transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-[#f6ee8f] mb-2">{work.title}</h3>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Expandable View */}
        <div className="md:hidden space-y-4">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="cursor-pointer p-4 flex items-start justify-between gap-3 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#f6ee8f]">{work.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{work.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#42b55e] flex-shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: expandedId === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-700"
              >
                <div className="p-4 space-y-4">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full rounded-lg object-cover h-40"
                  />
                  <p className="text-gray-300 text-sm">{work.fullDescription}</p>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#42b55e] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#3a9a4d] transition-colors text-sm"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
