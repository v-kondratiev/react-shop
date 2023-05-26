import style from "./Home.module.css"
import Navigation from "./Navigation/Navigation";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    return (
        <section className={style.Home}>
            <div className={style.container}>
                <Navigation/>
                <Carousel/>
            </div>


        </section>

    )
}
export default Home;