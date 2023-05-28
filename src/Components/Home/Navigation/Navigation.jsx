import style from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={style.Navigation}>
            <div className={style.title}>
                <h2> CATEGORIES</h2>
            </div>

            <div className={style.nav_menu}>
                <div>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Jewelery</a></li>
                        <li><a href="#">Men's clothing</a></li>
                        <li><a href="#">Women's clothing</a></li>
                    </ul>
                </div>

                <div className={style.information}>
                    <a href="#">Help</a>
                    <a href="#">Terms & Conditions</a>
                </div>

            </div>


        </nav>

    )

}
export default Navigation;