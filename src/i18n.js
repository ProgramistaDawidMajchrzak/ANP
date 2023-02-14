import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      "sliderText1": "Promocja na komputerową diagnostykę",
      "sliderSubText1": "i wymianę paska rozrządu",
      "sliderText2": "Wymiana oleju dla samochodów",
      "sliderSubText2": "z automatyczną skrzynią biegów",
      "sliderText3": "Naprawa silnika, skrzyni biegów, rozrząd?",
      "sliderSubText3": "Zajmiemy się tym!",
      "offer1": "Naprawa silników",
      "offer2": "Wymiana oleju w skrzyni biegów",
      "offer3": "Konserwacja systemu hamulcowego",
      "offer4": "Diagnostyka zawieszenia",
      "offer5": "Wymiana olejów i filtrów",
      "offer6": "Naprawa układu kierowniczego",
      "offer7": "Naprawa układu wydechowego",
      "offer8": "Wymiana termostatu / lamp",
      "offer9": "Wymiana paska rozrządu",
      "offer10": "Elektryka samochodowa",
      "offers": "Usługi",
      "contact": "Kontakt",
      "map": "Mapa",
      "rodo": "Akceptuję informacje dotyczące ochrony danych osobowych",
      "name": "Imię",
      "phone": "Telefon",
      "askQ": "Zadaj pytanie",
      "send": "Wyślij",
      "footer1": "Nie czekaj!",
      "footer2": "Zadzwoń i umów się już teraz!"
    }
  },
  ru: {
    translation: {
      "sliderText1": "Акция на замену ГРМ и ",
      "sliderSubText1": "компьтютерную диагностику",
      "sliderText2": "Полная и частичная замена масла",
      "sliderSubText2": "в АКПП от 350 зл",
      "sliderText3": "Стучит двигатель , не работает коробка передач , свист от ГРМ?",
      "sliderSubText3": "Мы решим проблему!",
      "offer1": "Ремонт двигателя",
      "offer2": "Замена масла в коробке передач",
      "offer3": "Починка  тормозной системы",
      "offer4": "Диагностика подвески",
      "offer5": "Замена масла и фильтров",
      "offer6": "Ремонт рулевой системы",
      "offer7": "Замена/ремонт выхлопной системы",
      "offer8": "Замена термостата / фар",
      "offer9": "Замена ГРМ",
      "offer10": "Автоэлектрика",
      "offers": "услуги",
      "contact": "контакт",
      "map": "карта",
      "rodo": "Принимаю ,Общий регламент защиты персональных данных",
      "name": "имя",
      "phone": "телефон",
      "askQ": "Задайте вопрос",
      "send": "Отправлять",
      "footer1": "Не ждите!",
      "footer2": "Позвоните нам и запишитесь на прием прямо сейчас!"
    }
  }
}

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    /* resources would be bundled with webpack
    resources: {
      en: {
        translation: {
          title: 'title...',//...
          description: {
            part1: 'First part',
            part2: 'Second part'
          }
        }
      }
    },*/
    lng: "pl",

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;