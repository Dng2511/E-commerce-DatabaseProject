import { currencyType } from "../constant/currency-type"
import { Link } from "react-router-dom";

const ProductItem = ({item}) => {
    return (<div className="col l-2-4 m-4 c-6">
    <Link to="/" className="home-product-item">
      <div className="home-product-item__img" style={{backgroundImage: `url(${item.img})`}} />
      <h4 className="home-product-item__name">
        {item.product_name}
      </h4>
      <div className="home-product-item__price">
        <span className="home-product-item__price-current">{currencyType(item.price)}</span>
      </div>
      <div className="home-product-item__action">
        <span className="home-product-item__like home-product-item__like--liked">
          <i className="home-product-item__like-icon-empty far fa-heart" />
          <i className="home-product-item__like-icon-fill fas fa-heart" />
        </span>
        <div className="home-product-item__rating">
          <i className="home-product-item__star--gold fas fa-star" />
          <i className="home-product-item__star--gold fas fa-star" />
          <i className="home-product-item__star--gold fas fa-star" />
          <i className="home-product-item__star--gold fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <div className="home-product-item__sold">{item.sold} Đã bán</div>
      </div>
      <div className="home-product-item__origin">
        <span className="home-product-item__brand">{item.brand}</span>
      </div>
    </Link>
  </div>)
}

export default ProductItem;