import './Contact.css'
import email from '../../assets/images/email.svg'
import phone from '../../assets/images/phone.svg'
import location from '../../assets/images/location.svg'
import linkedin from '../../assets/images/linkedin.svg'
import be from '../../assets/images/be.svg'
import instagram from '../../assets/images/instagram-contact.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact__wrappper">
                <div className="contact__left">
                    <h3 className='contact__title'>Les’t talk <br /> on something <span>great</span> together</h3>
                    <div className="contact__info">
                        <a className='contact__info__link' href="#">
                            <div className="contact__info__image">
                                <img src={email} alt="" />
                            </div>
                            <span>andreaDesign@gmail.com</span>
                        </a>
                        <a className='contact__info__link' href="#">
                            <div className="contact__info__image">
                                <img src={phone} alt="" />
                            </div>
                            <span>+34 123 456 789</span>
                        </a>
                        <a className='contact__info__link' href="#">
                            <div className="contact__info__image">
                                <img src={location} alt="" />
                            </div>
                            <span>123 Street 487 House</span>
                        </a>
                    </div>
                    <div className="contact__left__webs">
                        <a href="#" className="contact__web__link">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="#" className="contact__web__link">
                            <img src={be} alt="" />
                        </a>
                        <a href="#" className="contact__web__link">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="contact__input__form">
                    <div className="jobs">
                        <h4 className='jobs__title'>I’m interested in:</h4>
                        <div className="jobs__list">
                            <button className="job">UX/ UI design</button>
                            <button className="job">Web design</button>
                            <button className="job">Design system</button>
                            <button className="job">Graphic design</button>
                            <button className="job">Other</button>
                        </div>
                    </div>
                    <div className="user">
                        <h4 className='name'>Your name</h4>
                        <input className='username__input' type="text" placeholder='Jhon Smith' />
                    </div>
                    <div className="user">
                        <h4 className='user__title'>Your email</h4>
                        <input className='user__input' type="email" placeholder='email@gmail.com' />
                    </div>
                    <div className="user">
                        <h4 className='user__title'>Your email</h4>
                        <textarea className='user__textarea' cols="30" rows="10"></textarea>
                    </div>
                    <a className='form__link' href="#">Send message</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact