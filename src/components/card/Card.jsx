import './Card.css'
import star from '../../assets/images/star.svg'

const Card = ({product}) => {

  return (
    <div className='new__card'>
        <img className='new__card__image' src={product.thumbnail} alt="" />
        <h4 className="new__card__title">{product.title}</h4>
        <strong className="new__card__rating">
          <img src={star} alt="" />
          {product.rating} <span>/5</span>
        </strong>
        <p className='new__card__price'>${product.price}</p>
    </div>
  )
}

export default Card