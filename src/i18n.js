// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation data
const resources = {
  en: {
    content: {
      helloMessage: "Hello world! My name is {{name}}",
      welcomeMessage: "Welcome to our language changer",
    },
  },
  hi: {
    content: {
      helloMessage: "नमस्ते! मेरा नाम {{name}} है",
      welcomeMessage: "हमारे भाषा परिवर्तक में आपका स्वागत है",
    },
  },
  fr: {
    content: {
      helloMessage: "Bonjour! Je m'appelle {{name}}",
      welcomeMessage: "Bienvenue dans notre changeur de langue",
    },
  },
  mr: {
    content: {
      helloMessage: "नमस्कार! माझं नाव {{name}} आहे",
      welcomeMessage: "आमच्या भाषा बदलकात आपले स्वागत आहे",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // react already escapes content
  },
});

export default i18n;
