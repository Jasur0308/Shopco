import './CommentCard.css'
import stars from '../../assets/images/stars.svg'
import sign from '../../assets/images/sign.svg'
import liked from '../../assets/images/liked.svg'

const CommentCard = ({comment}) => {

  return (
    <div className='comment__card'>
        <img className='stars' src={stars} alt="" />
        <h3 className='customer__name'>
            {comment.user.fullName}
            <img src={sign} alt="" />
        </h3>
        <h4 className="comment">"{comment.body}"</h4>
        <p className="likes">
            <span className='likes__title'>Liked:</span>
            <button><img src={liked} alt="" /></button>
            <span>{comment.likes}</span>
        </p>
    </div>
  )
}

export default CommentCard