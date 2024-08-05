import Card from '../card/Card'
import { useEffect, useState } from 'react';
import './Top.css'
import axios from 'axios';

const Top = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios('https://dummyjson.com/products')
        .then(response => { setProducts(response.data.products);
        })
    }, [])
    
  return (
    <div className='new'>
        <div className="container">
            <div className="new__wrapper">
                <h3 className='new__title'>top selling</h3>
                <div className="new__cards">
                    {
                        products.map(product =>
                            <Card key={product.id} product = {product} />
                        ).slice(19, 23)
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

export default Top