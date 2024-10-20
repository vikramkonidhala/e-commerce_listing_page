import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Compoenents/Header/Header.js"
import ProductsPage from "./Compoenents/ProductsPage/ProductsPage.js"
import ThankYou from "./Compoenents/ThankYou/ThankYou.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route eaxct path="/" Component={ProductsPage}/>
        <Route eaxct path="thank-you" Component={ThankYou}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
