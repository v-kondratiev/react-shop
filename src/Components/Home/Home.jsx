import style from "./Home.module.css"
import Navigation from "./Navigation/Navigation";
import Carousel from "./Carousel/Carousel";
import {Route, Routes} from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
    return (
        <section className={style.Home}>
            <div className={style.container}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Carousel/>}/>
                    <Route path="/product/:productId" element={<Product/>}/>
                </Routes>
            </div>
        </section>
    )
}
export default Home;