import './Footer.css'
import sms from '../../assets/images/sms.svg'
import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import github from '../../assets/images/github.svg'
import visa from '../../assets/images/visa.svg'
import upai from '../../assets/images/upai.svg'
import paypai from '../../assets/images/paypai.svg'
import applepay from '../../assets/images/applepay.svg'
import googlepay from '../../assets/images/googlepay.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__extra">
                <h3 className='footer__extra__title'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                <div className="footer__extra__forms">
                    <div className="footer__extra__input__wrapper">
                        <img src={sms} alt="" />
                        <input className='footer__extra__input' type="text" placeholder='Enter your email address' />
                    </div>
                    <div className="footer__extra__link__wrapper">
                        <a className='footer__extra__link' href="#">Subscribe to Newsletter</a>
                    </div>
                </div>
            </div>
            <div className="footer__wrapper">
                <div className="footer__left">
                    <img src={logo} alt="" />
                    <p className="footer__description">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="footer__left__webs">
                        <a href="" className="footer__web__link">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="" className="footer__web__link">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="" className="footer__web__link">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="" className="footer__web__link">
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer__list">
                    <h4 className="footer__list__title">company</h4>
                    <ul className="footer__link__col">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">About</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Features</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Works</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Career</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__list">
                    <h4 className="footer__list__title">help</h4>
                    <ul className="footer__link__col">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Customer Support</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Delivery Details</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Terms & Conditions</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__list">
                    <h4 className="footer__list__title">faq</h4>
                    <ul className="footer__link__col">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Account</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Manage Deliveries</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Orders</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Payments</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__list">
                    <h4 className="footer__list__title">resources</h4>
                    <ul className="footer__link__col">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Free eBooks</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Development Tutorial</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">How to - Blog</a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link__item">Youtube Playlist</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="footer__bottom">
                <a href="#" className="footer__bottom__link">Shop.co © 2000-2023, All Rights Reserved</a>
                <div className="footer__bottom__webs">
                    <a href="#" className="footer__bottom__web__link">
                        <img src={visa} alt="" />
                    </a>
                    <a href="#" className="footer__bottom__web__link">
                        <img src={upai} alt="" />
                    </a>
                    <a href="#" className="footer__bottom__web__link">
                        <img src={paypai} alt="" />
                    </a>
                    <a href="#" className="footer__bottom__web__link">
                        <img src={applepay} alt="" />
                    </a>
                    <a href="#" className="footer__bottom__web__link">
                        <img src={googlepay} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer