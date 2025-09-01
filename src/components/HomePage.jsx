import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Categories from "./CategoriesPage";
import hero1 from "../assets/img/hero.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";
// import { BarrelIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const HomePage = ({ setCurrentPage, setCurrentCategory }) => {
  const [bgPos, setBgPos] = useState(0);
  const [direction, setDirection] = useState(1);
  const heroImages = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Brand name typing effect
  const brandTexts = ["UPODHOUKON", "উপঢৌকন", "उपढौकन"];
  const [brand, setBrand] = useState("");
  const [brandIndex, setBrandIndex] = useState(0);
  const [brandCharIndex, setBrandCharIndex] = useState(0);
  const [brandDeleting, setBrandDeleting] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    const currentBrand = brandTexts[brandIndex];
    let timer;
    if (!brandDeleting && brandCharIndex < currentBrand.length) {
      timer = setTimeout(() => {
        setBrand((prev) => prev + currentBrand[brandCharIndex]);
        setBrandCharIndex((prev) => prev + 1);
      }, 120);
    } else if (brandDeleting && brandCharIndex > 0) {
      timer = setTimeout(() => {
        setBrand(currentBrand.substring(0, brandCharIndex - 1));
        setBrandCharIndex((prev) => prev - 1);
      }, 80);
    } else if (!brandDeleting && brandCharIndex === currentBrand.length) {
      timer = setTimeout(() => setBrandDeleting(true), 2000);
    } else if (brandDeleting && brandCharIndex === 0) {
      setBrandDeleting(false);
      setBrandIndex((prev) => (prev + 1) % brandTexts.length);
    }
    return () => clearTimeout(timer);
  }, [brandCharIndex, brandDeleting, brandIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPos((prev) => {
        let next = prev + direction * 2;
        if (next >= 200) {
          setDirection(-1);
          next = 200;
        } else if (next <= 0) {
          setDirection(1);
          next = 0;
        }
        return next;
      });
    }, 40); // speed
    return () => clearInterval(interval);
  }, [direction]);

  const shimmerStyle = {
    background: "linear-gradient(90deg, #ffffff 25%, #e65e10 50%, #ffffff 75%)",
    backgroundSize: "200% 100%",
    backgroundPosition: `${bgPos}% 0`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };
  // Typing effect
  const texts = [
    "Shop top-quality, sustainable products inspired by tradition 🌟",
    "Join thousands of happy customers saving up to 70% daily! 💰",
    "Experience premium shopping with lightning-fast delivery ⚡",
    "Discover eco-friendly products that make a difference 🌍",
  ];
  const [subtitle, setSubtitle] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Counters
  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [savings, setSavings] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;
    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => {
        setSubtitle((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setSubtitle(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Counter animations
  useEffect(() => {
    let cust = 0,
      prod = 0,
      save = 0;
    const interval = setInterval(() => {
      if (cust < 50000) cust += 500;
      if (prod < 10000) prod += 200;
      if (save < 70) save += 1;
      setCustomers(cust);
      setProducts(prod);
      setSavings(save);
      if (cust >= 50000 && prod >= 10000 && save >= 70) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto !px-4 sm:px-6 lg:px-8 py-2 bg-gray-100">
      {/* Hero Section */}
      <motion.div
        className="relative rounded-xl shadow-xl overflow-hidden !h-[760px] sm:h-[600px] lg:h-[700px]"
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          position: "relative",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#00000061]  z-0" />
        {/* Floating Circles */}
        <div className="absolute top-10 left-6 w-12 sm:w-20 h-12 sm:h-20 bg-white/10 rounded-full blur-sm animate-[float_4s_ease-in-out_infinite]" />
        <div className="absolute top-32 right-10 w-10 sm:w-16 h-10 sm:h-16 bg-blue-300/20 rounded-full blur-sm animate-[float_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-24 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-purple-300/15 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-12 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite]" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
          {/* Sale Badge */}
          <div className="mb-4 sm:mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 animate-[bounce-in_0.8s_ease-out]">
            <span className="text-white text-xs sm:text-sm font-semibold">
              🎉 Grand Opening Sale - Limited Time!
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            <span style={shimmerStyle} className="block mb-1 sm:mb-2">
              Discover Great Deals
            </span>
            {/* <span className="text-white block">at UPODHOUKON</span> */}
            <span className="text-white block">at {brand}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-md sm:max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/categories")} // ✅ navigate to categories
              className="bg-white text-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl animate-[pulse-glow_2s_ease-in-out_infinite]"
            >
              🚀 Explore Now
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("🎬 Demo video coming soon!")}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              ▶️ Watch Demo
            </motion.button>
          </div>

          {/* Counters */}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-8 text-center"
            style={{ alignItems: "center" }}
          >
            <div
              style={{
                animation: "floatWave 3s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <div className="text-xl sm:text-3xl font-bold text-white">{customers}</div>
              <div className="text-blue-200 text-xs sm:text-sm">Happy Customers</div>
            </div>
            <div
              style={{
                animation: "floatWave 3s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            >
              <div className="text-xl sm:text-3xl font-bold text-white">{products}</div>
              <div className="text-blue-200 text-xs sm:text-sm">Products</div>
            </div>
            <div
              style={{
                animation: "floatWave 3s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <div className="text-xl sm:text-3xl font-bold text-white">{savings}%</div>
              <div className="text-blue-200 text-xs sm:text-sm">Avg Savings</div>
            </div>
            <style>
              {`
              @keyframes floatWave {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
                   }
              `}
            </style>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

