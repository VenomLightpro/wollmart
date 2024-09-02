import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return (
      <>
      <>
  {/* Start of Main */}
  <main className="main login-page">
    {/* Start of Page Header */}
    <div className="page-header">
      <div className="container">
        <h1 className="page-title mb-0">My Account</h1>
      </div>
    </div>
    {/* End of Page Header */}
    {/* Start of Breadcrumb */}
    <Meta title={"Блог"} />
    <BreadCrumb title="Блог" />
    {/* End of Breadcrumb */}
    <div className="page-content">
      <div className="container">
        <div className="login-popup">
          <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
            <ul className="nav nav-tabs text-uppercase" role="tablist">
              <li className="nav-item">
                <a href="login.html#sign-in" className="nav-link active">
                  Войти
                </a>
              </li>
              <li className="nav-item">
                <a href="login.html#sign-up" className="nav-link">
                  Зерегистрироваться
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="sign-in">
                <div className="form-group">
                  <label>Email *</label>
                  <CustomInput type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group mb-0">
                  <label>Пароль *</label>
                  <CustomInput type="password" name="password" placeholder="Пароль" />
                </div>
                <div className="form-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="remember1"
                    name="remember1"
                    required=""
                  />
                  <label htmlFor="remember1">Запомнить меня</label>
                  <Link href="/forgot-password">Восстановить пароль</Link>
                </div>
                <Link href="login.html#" className="btn btn-primary">
                  Войти
                </Link>
              </div>
              <div className="tab-pane" id="sign-up">
                <div className="form-group">
                  <label>Ваш email адрес *</label>
                  <CustomInput type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group mb-5">
                  <label>Пароль *</label>
                  <CustomInput type="password" name="password" placeholder="Пароль" />
                </div>
                <div className="checkbox-content login-vendor">
                  <div className="form-group mb-5">
                    <label>Имя *</label>
                    <CustomInput type="text" name="name" placeholder="Имя" />
                  </div>
                  <div className="form-group mb-5">
                    <label>Телефон *</label>
                    <CustomInput type="text" name="phone" placeholder="Телефон" />
                  </div>
                </div>
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="login.html#" className="text-primary">
                    privacy policy
                  </a>
                  .
                </p>
                <a href="login.html#" className="d-block mb-5 text-primary">
                  Signup as a vendor?
                </a>
                <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="remember"
                    name="remember"
                    required=""
                  />
                  <label htmlFor="remember" className="font-size-md">
                    I agree to the{" "}
                    <a href="login.html#" className="text-primary font-size-md">
                      privacy policy
                    </a>
                  </label>
                </div>
                <Link ещ="/login" className="btn btn-primary">
                  Войти
                </Link>
              </div>
            </div>
            <p className="text-center">Sign in with social account</p>
            <div className="social-icons social-icon-border-color d-flex justify-content-center">
              <a
                href="login.html#"
                className="social-icon social-facebook w-icon-facebook"
              />
              <a
                href="login.html#"
                className="social-icon social-twitter w-icon-twitter"
              />
              <a
                href="login.html#"
                className="social-icon social-google fab fa-google"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* End of Main */}
</>

      </>
  )
}

export default Login