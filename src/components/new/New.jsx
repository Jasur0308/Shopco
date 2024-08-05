import Card from '../card/Card'
import { useEffect, useState } from 'react';
import './New.css'
import axios from 'axios';

const New = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then(response => { setProducts(response.data.products)
        })
    }, [])
    
  return (
    <div className='new'>
        <div className="container">
            <div className="new__wrapper">
                <h3 className='new__title'>new arrivals</h3>
                <div className="new__cards">
                    {
                        products.map(product =>
                            <Card key={product.id} product = {product} />
                        ).slice(0, 4)
                    }
                </div>
                <div className="new__link__wrapper">
                    <a className='new__link' href="#">view all</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New