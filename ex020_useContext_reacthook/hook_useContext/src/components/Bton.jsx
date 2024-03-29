/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { counterContext } from '../../context/context'
const Bton = (prop) => {
    const value = useContext(counterContext)
    return (
        <div>
            {/* method 1 
            <button onClick={()=>{prop.setCount(prop.count + 1)}}>
                count = {prop.count}
                
            </button>
            */}

            {/* method 2 */}

            <button onClick={() => { value.setCount(value.count + 1) }}>
                count = {value.count}

            </button>

        </div>
    )
}

export default Bton
