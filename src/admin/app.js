import AuthLogo from "./extensions/favicon.png";
import MenuLogo from "./extensions/favicon.png";
import favicon from "./extensions/favicon.png";

const config = {
  locales: [
    "ar",
    "fr",
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: AuthLogo,
  },
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Add a new locale, other than 'en'

  // Replace the Strapi logo in the main navigation
  menu: {
    logo: MenuLogo,
  },
  // Override or extend the theme
  theme: {
    colors: {
      // primary100: "#3a64b8",
      // primary200: "#224ea7",
      // primary500: "#154097",
      // primary600: "#0b368c",
      // primary700: "#00297b",
      // danger700: "#000",
    },
  },
  // Extend the translations
  translations: {
    fr: {
      "Auth.form.email.label": "test",
      Users: "Utilisateurs",
      City: "CITY (FRENCH)",
      // Customize the label of the Content Manager table.
      Id: "ID french",
    },
    en: {
      "app.components.LeftMenu.navbrand.title": "AnalytiSys",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
