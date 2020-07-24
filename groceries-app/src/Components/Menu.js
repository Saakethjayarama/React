import React, {Component} from 'react'
import '../css/Menu.css'

import MenuItem from '../Components/MenuItem'


class Menu extends Component{

    constructor(props){
        super(props)
        this.onClickListener = this.onClickListener.bind(this)
    }

    onClickListener(keys) {
        const {clickListener} = this.props
        clickListener(keys)
    }



    render() {
        const {menu} = this.props
        return <div className="menu">
            {menu.map((menuItem, index) => {
            return <MenuItem 
                menuItem = {menuItem}
                keys={index}
                key={index}
                clickListener={this.onClickListener}
            />
            })}
      </div>
    }
}

export default Menu