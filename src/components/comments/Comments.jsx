import { useEffect, useState } from 'react';
import './Comments.css'
import axios from 'axios';
import CommentCard from '../comment-card/CommentCard';

const Comments = () => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        axios('https://dummyjson.com/comments')
        .then(response => { setComments(response.data.comments);
        })
    }, [])
    
  return (
    <div className='comment'>
        <div className="container">
            <div className="comment__wrapper">
                <h3 className='comment__title'>OUR HAPPY CUSTOMERS</h3>
                <div className="comment__cards">
                    {
                        comments.map(comment =>
                            <CommentCard key={comment.id} comment = {comment} />
                        ).slice(0, 3)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comments