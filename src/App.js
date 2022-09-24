import './App.css';
import SobrePage from "./pages/SobrePage";
import HomePage from './pages/HomePage';
import ImoveisPage from './pages/ImoveisPage';
import ImovelSinglePage from './components/ImovelSinglePage';
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MenuPageTemplate>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sobre" element={<SobrePage/>}/>
            <Route path="/imoveis" element={<ImoveisPage/>}/>
            <Route path="/imoveis/:id" element={<ImovelSinglePage/>}/>
          </Routes>
      </MenuPageTemplate>
    </BrowserRouter>
  );
}

export default App;
