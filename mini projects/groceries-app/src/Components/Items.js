import React, {Component} from 'react'
import '../css/Items.css'
import '../css/Product.css'

class Item extends Component{

    product(name, price, index) {
        return<div className="grocery-item" key={index}>
            <div className="product-name">
                {name}
            </div>
            <div className="product-price">
                {price}
            </div>
        </div>
    }

    render() {
        const {products} = this.props
        return <div className="grocery-items">
            {products.map((product, index) => {
                return this.product(product.name, product.price, index)
            })}
      </div>
    }
}

export default Item