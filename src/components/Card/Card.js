import React from 'react'

function Card(props){
    console.log(props)
    return(
        <div className='Card'>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Card;