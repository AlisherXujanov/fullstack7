import AllComponents from "./components/AllComponents"
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { globalContext } from "./state";

function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const state = useContext(globalContext)

  const handleChangeLanguage = () => {
    const newLanguage = state.currentLanguage === "en" ? "ru" : "en";
    state.dispatch({ type: "CHANGE_LANGUAGE", currentLanguage: newLanguage })
    changeLanguage(newLanguage);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
