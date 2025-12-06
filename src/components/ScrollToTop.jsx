import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-12 right-8 bg-green-500 hover:bg-green-600 text-white hover:text-red-700 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} z-50 cursor-pointer
      `}
    >
      <FiArrowUp size={22} />
    </button>
  );
}
