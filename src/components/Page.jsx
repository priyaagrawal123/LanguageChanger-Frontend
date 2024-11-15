import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import image1 from "./image2.webp";
import image2 from "./image6.jpeg";
import image3 from "./image8.jpeg";
import image4 from "./image10.png";


const translations = {
  en: {
    navbar: {
      home: "Home",
      language: "Language",
    },
    content: {
      helloMessage: "Hello world! My name is Priya",
      welcomeMessage: "Welcome to our language changer",
      explore: "Know more about the History about some Languages, Let's Explore it...",
    },
  },
  hii: {
    navbar: {
      home: "home",
      language: "bhasha",
    },
    content: {
      helloMessage: "Namaste duniya, Mera naam Priya hai",
      welcomeMessage: "Hamare bhasha parivartak me apka swagat hai",
      explore: "kuch bhashao ke itihas ke bareme aur jane, chaliye ise explore kare",
    },
  },
  hi: {
    navbar: {
      home: "होम",
      language: "भाषा",
    },
    content: {
      helloMessage: "नमस्ते! मेरा नाम प्रिया है",
      welcomeMessage: "हमारे भाषा परिवर्तक में आपका स्वागत है",
      explore: "कुछ भाषाओं के इतिहास के बारे में और जानें, चलिए इसे एक्सप्लोर करते हैं...",
    },
  },
  fr: {
    navbar: {
      home: "Accueil",
      language: "Langue",
    },
    content: {
      helloMessage: "Bonjour! Je m'appelle Priya",
      welcomeMessage: "Bienvenue dans notre changeur de langue",
      explore: "En savoir plus sur l'histoire de certaines langues, explorons-les...",
    },
  },
  mr: {
    navbar: {
      home: "मुख्यपृष्ठ",
      language: "भाषा",
    },
    content: {
      helloMessage: "नमस्कार! माझं नाव प्रिया आहे",
      welcomeMessage: "आमच्या भाषा बदलकात आपले स्वागत आहे",
      explore: "काही भाषांचा इतिहास अधिक जाणून घ्या, चला त्याचा शोध घेऊया...",
    },
  },
};

const imageUrls = [
  { src: image3, link: "/page1" },
  { src: image1, link: "/page2" },
  { src: image2, link: "/page3" },
  { src: image4, link: "/page4" },
];

function Page() {
  const [language, setLanguage] = useState("en");
  const [words, setWords] = useState([]);
  const [isLooping, setIsLooping] = useState(false);
  const [userName, setUserName] = useState("");

  const translation = translations[language];

  useEffect(() => {
    setWords(translation.content.welcomeMessage.split(" "));
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setUserName(storedName);
    }
  }, [language]);

  const handleLoopReset = () => {
    setIsLooping(false);
    setTimeout(() => {
      setIsLooping(true);
    }, 1000);
  };

  const displayName = userName || "Priya";

  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Navbar
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />

      <div className="text-center py-10 mt-6">
        <p className="text-2xl text-black">
          {translation.content.helloMessage.replace("{name}", displayName)}
        </p>
        <br />

        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}-${isLooping}`}
            className="inline-block text-6xl text-black font-semibold mr-3"
            style={{ fontFamily: "'Lobster', cursive" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              delay: index * 0.5,
              duration: 1,
              ease: "easeInOut",
              repeat: isLooping ? Infinity : 0,
              repeatType: "loop",
            }}
            onAnimationComplete={() => {
              if (index === words.length - 1 && isLooping) {
                handleLoopReset();
              }
            }}
          >
            {word}
          </motion.span>
        ))}
        
        {/* Use the translated 'explore' message here */}
        <p className="m-12 text-2xl font-semibold">
          {translation.content.explore}
        </p>

        <div className="flex justify-center mt-8 gap-6">
          {imageUrls.map((image, index) => (
            <a href={image.link} key={index}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-96 h-96 object-cover border-4 border-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
