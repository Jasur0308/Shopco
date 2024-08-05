import './Banner.css'
import banner from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner} alt="" />
        <div className="container">
            <div className="banner__content">
                <h2 className='banner__title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                <p className="banner__description">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <a href="#" className="banner__link">shop now</a>
                <div className="banner__cards">
                    <div className="banner__card">
                        <h4 className="banner__card__number">200+</h4>
                        <p className="banner__card__text">international brands</p>
                    </div>
                    <div className="card__line"></div>
                    <div className="banner__card">
                        <h4 className="banner__card__number">2,000+</h4>
                        <p className="banner__card__text">High-Quality Products</p>
                    </div>
                    <div className="card__line"></div>
                    <div className="banner__card">
                        <h4 className="banner__card__number">30,000+</h4>
                        <p className="banner__card__text">happy customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner