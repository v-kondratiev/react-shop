import "./../style/reset/reset.css"
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import BestSellers from "./BestSellers/BestSellers";
import Product from "./Product/Product";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product />}/>
            </Routes>
            <BestSellers/>
        </div>
    );
}

export default App;
