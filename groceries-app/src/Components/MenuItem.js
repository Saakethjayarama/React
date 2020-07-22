import React, {Component} from 'react'
import '../css/MenuItem.css'


class MenuItem extends Component {

    constructor(props){
        super(props)

        this.clicked = this.clicked.bind(this)
    }

    clicked() {
        const {keys} = this.props
        const {clickListener} = this.props
        clickListener(keys)
    }

    render() {
        const {menuItem} = this.props
        return <div className="item" onClick={this.clicked}>
            {menuItem}
        </div>
    }
}

export default MenuItem