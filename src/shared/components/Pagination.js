const Pagination = () => (
<ul className="pagination home-product__pagination">
            <li className="pagination-item">
              <a href className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-left" />
              </a>
            </li>
            <li className="pagination-item pagination-item--active">
              <a href className="pagination-item__link">1</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">2</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">3</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">4</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">5</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">...</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">14</a>
            </li>
            <li className="pagination-item">
              <a href className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-right" />
              </a>
            </li>
          </ul>
);

export default Pagination;