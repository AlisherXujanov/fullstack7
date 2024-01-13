import AllComponents from "./components/AllComponents"
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { globalContext } from "./state";

function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const state = useContext(globalContext)

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    state.dispatch({ type: "CHANGE_LANG", currentLanguage: newLanguage })
    changeLanguage(newLanguage);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>

      <h1>
        Our Translated Heading:
        {t('heading', { name: "Alisher", appName: "App for Translations" })}
      </h1>
      <h3>
        Current Language: {language}
      </h3>
      <button className="warning-btn" onClick={handleChangeLanguage}
      >
        Change Language
      </button>
    </div>
  );
}

export default App;
