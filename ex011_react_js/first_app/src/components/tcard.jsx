import React from 'react'
import "./tcard.css"
const Tcard = (data) => {
    return (
        <div className='card'>
            <img src="https://www.worldatlas.com/r/w1200/upload/da/27/73/shutterstock-459943711.jpg" alt="" />
            <div className="details">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}
React
export default Tcard
