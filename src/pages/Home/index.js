import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product_item";
import { useSearchParams, Link } from "react-router-dom";
import Categories from "../../shared/components/Categories";
const Home = () => {
  /* const params = useParams(); */
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [products, setProduct] = React.useState([]);
  
  React.useEffect(() => {
    getProducts({
      params: {
        limit: 40,
        page: page,
      }
    }).then(({data})=>{
      setProduct(data.rows)}
    )
}, [page]);

  console.log(products)
  
  return (
    <div className="app__container">
    <div className="grid wide">
      <div className="row sm-gutter app__content">
        {/* Category */}
        <div className="col l-2 m-0 c-0">
          <Categories/>
        </div>
        <div className="col l-10 m-12 c-12">
          {/* Filter */}
          <div className="home-filter hide-on-mobile-tablet">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn--primary">
              Mới nhất
            </button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input">
              <span className="select-input__label">Giá</span>
              <i className="select-input__icon fas fa-angle-down" />
              {/* List option */}
              <ul className="select-input__list">
                <li className="select-input__item">
                  <Link to="/" className="select-input__link">Giá: Thấp đến Cao</Link>
                </li>
                <li className="select-input__item">
                  <Link to="/" className="select-input__link">Giá: Cao đến Thấp</Link>
                </li>
              </ul>
            </div>
            <div className="home-filter__page">
              <span className="home-filter__page-num">
                <span className="home-filter__page-current">1</span>/15
              </span>
              <div className="home-filter__page-control">
                <Link to className="home-filter__page-btn home-filter__page-btn--disabled">
                  <i className="home-filter__page-icon fas fa-angle-left" />
                </Link>
                <Link to className="home-filter__page-btn">
                  <i className="home-filter__page-icon fas fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Category */}
          <nav className="mobile-category">
            <ul className="mobile-category__list">
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
              <li className="mobile-category__item">
                <Link to="/" className="mobile-category__link">Dụng cụ &amp; Thiết bị tiện ích</Link>
              </li>
            </ul>
          </nav>
          {/* Product */}
          <div className="home-product">
            <div className="row sm-gutter">
              {/* Product item */}
              {products.map((item) =>(
                <ProductItem item={item}/>
              ))}
            </div>
          </div>
          <ul className="pagination home-product__pagination">
            <li className="pagination-item">
              <Link to className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-left" />
              </Link>
            </li>
            <li className="pagination-item pagination-item--active">
              <Link to className="pagination-item__link">1</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">2</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">3</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">4</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">5</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">...</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">14</Link>
            </li>
            <li className="pagination-item">
              <Link to className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}
export default Home;