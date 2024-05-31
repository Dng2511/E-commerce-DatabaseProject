const Footer = () =>(
    <div className="footer">
    <div className="grid wide footer__content">
      <div className="row">
        <div className="col l-2-4 m-4 c-6">
          <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Chính Sách Vận Chuyển</a>
            </li>
          </ul>
        </div>
        <div className="col l-2-4 m-4 c-6">
          <h3 className="footer__heading">VỀ CHÚNG TÔI</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Giới Thiệu Về Shop</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Tuyển Dụng</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Điều Khoản Shop</a>
            </li>
          </ul>
        </div>
        <div className="col l-2-4 m-4 c-6">
          <h3 className="footer__heading">Payment</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">mức</a>
            </li>
          </ul>
        </div>
        <div className="col l-2-4 m-4 c-6">
          <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-facebook-square" />
                Facebook</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-instagram-square" />
                Instagram</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-linkedin" />
                Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="col l-2-4 m-8 c-12">
          <h3 className="footer__heading">VÀO CỬA HÀNG TRÊN ỨNG DỤNG</h3>
          <div className="footer__download">
            <img src="./assets/img/qr_code.png" alt="Download QR" className="footer__dowload-qr" />
            <div className="footer__download-apps">
              <a href="#" className="footer__download-app-link">
                <img src="./assets/img/google_play.png" alt="Google Play" className="footer__download-app-img" />
              </a>
              <a href="#" className="footer__download-app-link">
                <img src="./assets/img/appstore.png" alt="App store" className="footer__download-app-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="grid wide">
        <p className="footer__text">
          © 2024 shopbee
        </p>
      </div>
    </div>
  </div>
)
export default Footer;