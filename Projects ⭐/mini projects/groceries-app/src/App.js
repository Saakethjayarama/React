import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import Axios from 'axios'
import Menu from './Components/Menu'
import Item from './Components/Items';


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

    Axios.get("http://localhost:8080/products/1")
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
    x = parseInt(x) + 1
    Axios.get("http://localhost:8080/products/"+x)
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
            <Menu 
              menu = {menu}
              clickListener = {this.onClickListener} />
            <Item 
              products = {products}
            />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
  
}

export default App;
