import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header title={"Каталог"} />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/:path" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
