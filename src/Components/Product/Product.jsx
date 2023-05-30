import style from "./Product.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
const Product = () => {
    let [product, setProduct] = useState([])
    let {productId} =useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    });
    return (
        <div className={style.Product}>

                    <div className={style.Product__top}>
                        <a href="#" className={style.Product__image}>
                            <img
                                src={product.image}
                                alt="product"
                            />
                        </a>
                        {/*<div className={style.Product__label}>discount%</div>*/}
                    </div>

                    <div className={style.Product__description}>
                        <div className="title"><h1>{product.title}</h1></div>


                        <div className="category">{product.category}</div>
                        <div className="price">{product.price} $</div>
                        <div className="description">{product.description}</div>
                        <div className={style.Bestsellers__btn}>
                            <button className= {style.add__btn}>Buy</button>
                            <button className= {style.favorites__btn}>Favorites</button>
                        </div>
                    </div>


        </div>

    )
}
export default Product;