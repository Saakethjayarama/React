import React, {Component} from 'react'
import '../css/Product.css'

class Product extends Component {

    render() {
        const {product} = this.props
        return<div className="grocery-item">
            <div className="product-name">
                {product.name}
            </div>
            <div className="product-price">
                {product.price}
            </div>
        </div>
    }
}

export default Product