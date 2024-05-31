import './App.css';
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="app">

    <Header/>
    <Home/>
    {/* Footer */}
    <Footer/>
    {/* Modal Layout */}
    {/* <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__body"> */}
    {/* Register Form */}
    {/* <div class="auth-form">
        <div class="auth-form__container">
          <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng ký</h3>
            <span class="auth-form__switch-btn">Đăng nhập</span>
          </div>
          <div class="auth-form__form">
            <div class="auth-form__group">
              <input
                type="text"
                class="auth-form__input"
                placeholder="Email"
              />
            </div>
            <div class="auth-form__group">
              <input
                type="password"
                class="auth-form__input"
                placeholder="Mật khẩu"
              />
            </div>
            <div class="auth-form__group">
              <input
                type="password"
                class="auth-form__input"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </div>
          <div class="auth-form__aside">
            <p class="auth-form__policy-text">
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về
              <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a>
              &
              <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
            </p>
          </div>
          <div class="auth-form__controls">
            <button class="btn auth-form__controls-back btn--normal">
              TRỞ LẠI
            </button>
            <button class="btn btn--primary">ĐĂNG KÝ</button>
          </div>
        </div>
        <div class="auth-form__socials">
          <a
            href=""
            class="auth-form__socials--facebook btn btn--size-s btn--with-icon"
          >
            <i class="auth-form__socials-icon fab fa-facebook-square"></i>
            <span class="auth-form__socials-title"
              >Kết nối với Facebook</span
            >
          </a>
          <a
            href=""
            class="auth-form__socials--google btn btn--size-s btn--with-icon"
          >
            <i class="auth-form__socials-icon fab fa-google"></i>
            <span class="auth-form__socials-title">Kết nối với Google</span>
          </a>
        </div>
      </div> */}
    {/* Login Form */}
    {/* <div class="auth-form">
        <div class="auth-form__container">
          <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng nhập</h3>
            <span class="auth-form__switch-btn">Đăng ký</span>
          </div>
          <div class="auth-form__form">
            <div class="auth-form__group">
              <input
                type="text"
                class="auth-form__input"
                placeholder="Email"
              />
            </div>
            <div class="auth-form__group">
              <input
                type="password"
                class="auth-form__input"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
          <div class="auth-form__aside">
            <div class="auth-form__help">
              <a href="" class="auth-form__help-link auth-form__help-forgot">
                Quên mật khẩu
              </a>
              <span class="auth-form__help-separate"></span>
              <a href="" class="auth-form__help-link">
                Cần trợ giúp?
              </a>
            </div>
          </div>
          <div class="auth-form__controls">
            <button class="btn auth-form__controls-back btn--normal">
              TRỞ LẠI
            </button>
            <button class="btn btn--primary">ĐĂNG NHẬP</button>
          </div>
        </div>
        <div class="auth-form__socials">
          <a
            href=""
            class="auth-form__socials--facebook btn btn--size-s btn--with-icon"
          >
            <i class="auth-form__socials-icon fab fa-facebook-square"></i>
            <span class="auth-form__socials-title"
              >Kết nối với Facebook</span
            >
          </a>
          <a
            href=""
            class="auth-form__socials--google btn btn--size-s btn--with-icon"
          >
            <i class="auth-form__socials-icon fab fa-google"></i>
            <span class="auth-form__socials-title">Kết nối với Google</span>
          </a>
        </div>
      </div> */}
    {/* </div>
  </div> */}
  </div>
</BrowserRouter>
  );
}

export default App;
