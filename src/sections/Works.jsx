import { motion } from "framer-motion";

const works = [
  {
    title: "ActiveX Token",
    description: "Blockchain / Web3",
    image: "images/ActiveX_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/2.png",
  },
  {
    title: "Smarthex Token",
    description: "Blockchain / Web3",
    image: "images/Smarthex_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/3.png",
  },
  {
    title: "Panthers NFT",
    description: "Blockchain / Web3",
    image: "images/Panthers_nft_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/5.png",
  },
  {
    title: "Maselly",
    description: "Website Application",
    image: "images/maselly_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/4.png",
  },
  {
    title: "9property Real-estate",
    description: "Website Application",
    image: "images/property_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/6.png",
  },
  {
    title: "DSIGATE",
    description: "Website Application",
    image: "images/dsigate_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/7.png",
  },
  {
    title: "Gift Beyond Wealth",
    description: "Website Application",
    image: "images/giftbeyond_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/8.png",
  },
  {
    title: "Yoghurt Vest",
    description: "Website Application",
    image: "images/yoghurt_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/9.png",
  },
  {
    title: "Virtual Homes Reality",
    description: "Blockchain / Web3",
    image: "images/Virtualhome_site.png",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/10.png",
  },
  {
    title: "Posa",
    description: "Website Application",
    image: "images/posa_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/posa.jpeg",
  },
  {
    title: "Egde Deal",
    description: "Mobile Application",
    image: "images/edge_deal_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/edge_deal.jpeg",
  },
  {
    title: "The Wills",
    description: "Mobile Application",
    image: "images/thewills_app.jpeg",
    link: "https://web.archive.org/web/20230424084527/https://dgict.co/assets/img/thewills.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WorkSection() {
  return (
    <div id="works" className="relative bg-[#42b55e] text-white py-20 px-6 md:px-16">
      <h1 className="absolute text-[60px] md:text-[110px] font-extrabold text-black/8 top-12 md:top-3 left-1/2 -translate-x-1/2 select-none">
      WORKS
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-black">OUR WORKS</h2>
      <hr className="w-16 m-auto mb-16 border-2 border-[#f6ee8f]"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <motion.a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden text-gray-900 cursor-pointer"
            custom={index} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-contain transform group-hover:scale-140 group-hover:rotate-12 transition duration-800"
              />
            </div>

            <div className="absolute top-24 left-0 px-4 h-28 w-fit bg-black inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-bold text-[#f6ee8f] mb-2">{work.title}</h3>
              <p className="text-white text-sm">{work.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
