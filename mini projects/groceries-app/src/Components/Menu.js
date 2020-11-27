import React, {Component} from 'react'
import '../css/Menu.css'
import '../css/MenuItem.css'

class Menu extends Component{

    constructor(props){
        super(props)
        this.onClickListener = this.onClickListener.bind(this)
    }

    onClickListener(event) {
        const {clickListener} = this.props
        var keys = event.target.value
        clickListener(keys)
    }

    item(menuitem, index) {
        return <button className="item" onClick={this.onClickListener} value={index} key={index}>
            {menuitem}
        </button>
    }


    render() {
        const {menu} = this.props
        return <div className="menu">
            {menu.map((menuItem, index) => {
            return this.item(menuItem, index)
            })}
      </div>
    }
}

export default Menu