import './Brands.css'
import versace from '../../assets/images/versace.svg'
import zara from '../../assets/images/zara.svg'
import gucci from '../../assets/images/gucci.svg'
import prada from '../../assets/images/prada.svg'
import calvin from '../../assets/images/calvin.svg'

const Brands = () => {
  return (
    <div className='brands'>
        <div className="container">
            <div className="brands__wrapper">
                <img src={versace} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={calvin} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Brands