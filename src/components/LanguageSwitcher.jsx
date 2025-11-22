import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() => changeLanguage("ta")}>தமிழ்</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;
