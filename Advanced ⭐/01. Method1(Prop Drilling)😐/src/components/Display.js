import React from 'react'
import Count from './Count'
import Control from './Control'

function Display(props) {

    const {increment, decrement, value} = props

    return (
        <div>
            <Count value={value}/>
            <Control increment={increment} decrement={decrement}/>
        </div>
    )
}

export default Display
