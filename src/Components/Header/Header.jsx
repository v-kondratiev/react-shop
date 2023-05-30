import logo from "./../../assets/LOGO 1.svg"
import magnifying from "./../../assets/magnifying.svg"
import heart from "./../../assets/heart.svg"
import basket from "./../../assets/bag.svg"
import style from "./Header.module.scss"
const Header =() => {
    return (
        <header className={style.Header}>
            <div className="header_top">
                <div className={style.container}>
                    <div className={style.header_top_row}>
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>

                        <div className={style.search_box}>
                            <input type="text" placeholder=""/>
                            <button><img src={magnifying} alt=""/></button>
                        </div>

                        <div className={style.icon_group}>
                            <a href="">
                                <img src={heart} alt=""/>
                            </a>

                            <a href="">
                                <img src={basket} alt=""/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;