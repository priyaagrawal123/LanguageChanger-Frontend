import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null); // New error state

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/hello?language=$[language]`)  //fetching api from backend using axios 
      .then((response) => {
        if (response.data.success) {
          setTranslations(response.data); 
        } else {
          setError(response.data.message);
          console.error("Error fetching translations:", response.data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching translations:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [language]);
  

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ translations, language, changeLanguage, loading, error }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;