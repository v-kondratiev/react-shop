import style from "./Home.module.css"
import Navigation from "./Navigation/Navigation";
import Carousel from "./Carousel/Carousel";

const Home = (props) => {
    return (
        <section className={style.Home}>
            <div className={style.container}>


                {
                props.linksToProps.map(el =><li><Navigation key={el.id}/>{el.name}</li>)
                }
                <Carousel/>
            </div>


        </section>

    )
}
export default Home;