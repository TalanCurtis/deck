import React from 'react'

function Card(props){
    console.log(props)
    return(
        <div className='Card'>
            {/* if its a queen highlight it */}
            {props.value==='QUEEN'?<img className='highlight' src={props.image} alt=""/>:<img src={props.image} alt=""/>}
        </div>
    )
}

export default Card;