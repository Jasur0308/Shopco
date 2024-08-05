import './Style.css'
import casual from '../../assets/images/casual.png'
import formal from '../../assets/images/formal.png'
import party from '../../assets/images/party.png'
import gym from '../../assets/images/gym.png'

const Style = () => {
  return (
    <div className='style'>
        <div className="container">
            <div className="style__wrapper">
                <h3 className="style__title">BROWSE BY dress STYLE</h3>
                <div className="style__images">
                    <img src={casual} alt="" />
                    <img src={formal} alt="" />
                    <img className='style__party' src={party} alt="" />
                    <img className='style__gym' src={gym} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Style