import React from 'react';
import './errorMassage.css';
import img from './errorImg.jpg'

const ErrorMassage = () => {
    return(
        <>
            <img src={img} alt='error'></img>
            <span>Something went wrong... =(</span>
        </>
    )
}

export default ErrorMassage