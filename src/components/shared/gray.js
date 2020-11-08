import React from 'react'
import '../shared/styles.css'

const gray = (props) => {
    return(
        <img className='gray-img'  src={props.img_url}/>
    );
}

export default gray