import './Navbar.css';
import close from '../../assets/images/close.svg';
import logo from '../../assets/images/logo.svg';
import loop from '../../assets/images/loop.svg';
import backet from '../../assets/images/backet.svg';
import profile from '../../assets/images/profile.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar__top">
        <p className='navbar__top__content'>
          Sign up and get 20% off your first order. <Link className='navbar__top__link' to="/contact">Sign Up Now</Link>
        </p>
        <button className='close__button' type='button'>
          <img src={close} alt="Close" />
        </button>
      </div>
      <div className="container">
        <div className="navbar__bottom">
          <img src={logo} alt="Logo" />
          <ul className="navbar__list">
            <li className="navbar__list__item">
              <a href="#" className="link__item">
                <select className='selection'>
                  <option value="Shop">Shop</option>
                  <option value="Buy">Buy</option>
                </select>
              </a>
            </li>
            <li className="navbar__list__item">
              <a href="#" className="link__item">on sale</a>
            </li>
            <li className="navbar__list__item">
              <a href="#" className="link__item">new arrivals</a>
            </li>
            <li className="navbar__list__item">
              <a href="#" className="link__item">brands</a>
            </li>
          </ul>
          <div className="navbar__search__input">
            <button className='search__button'>
              <img src={loop} alt="Search" />
            </button>
            <input className='navbar__input' type="text" placeholder='Search for products' />
          </div>
          <div className="navbar__right">
            <a href="#">
              <img src={backet} alt="Basket" />
            </a>
            <a href="/routes/contact/Contact.jsx">
              <img src={profile} alt="Profile" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;