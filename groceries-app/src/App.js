import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './Components/HeaderComponent'
import MenuItem from './Components/MenuItem';
import Product from './Components/Product';
import FooterComponent from './Components/FooterComponent'
import Axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menu : [],
      products : []
    }

    this.onClickListener = this.onClickListener.bind(this)
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/menuItems")
      .then((res) => {
        this.setState({
          menu : res.data
        })
      })
      .catch((err) => {
        console.log("Some Error occured")
      })

    Axios.get("http://localhost:8080/products/2")
      .then((res) => {
        this.setState({
          products : res.data
        })
      })
      .catch((err) => {
        console.log("Some Error occured")
      })
  }

  onClickListener(x) {
    Axios.get("http://localhost:8080/products/"+(x+1))
      .then((res) => {
        this.setState({
          products : res.data
        })
      })
      .catch((err) => {
        console.log("Some Error occured")
      })
  }

  render() {
    const {menu} = this.state
    const {products} = this.state
    return (
      <div className="App">
        <HeaderComponent />
        <div className="body">
          <div className="body-contents">
              <div className="menu">
                {menu.map((menuItem, index) => {
                  return <MenuItem 
                    menuItem = {menuItem}
                    keys={index}
                    clickListener={this.onClickListener}
                  />
                })}
                
              </div>
              <div className="grocery-items">
              {products.map((product, index) => {
                    return <Product 
                    product = {product}
                    key={`prod-list-key ${index}`}
                  />
                })}
  
              </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
  
}

export default App;
