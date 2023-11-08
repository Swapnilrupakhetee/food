import React from 'react'
import Productbox from './Productbox'
import pimage1 from'./s1.png'
import pimage2 from'./s2.png'

function Products() {
  return (
    <div id='products'>
        <h1>DRINK & ENJOY</h1>
        <div className='a-container'>
            <Productbox image={pimage1} title="Smoked Beer"/>
            <Productbox image={pimage2} title="Iced Beer"/>
            <Productbox image={pimage1} title="Cream Beer"/>
            <Productbox image={pimage1} title="Smoked Beer"/>
            <Productbox image={pimage2} title="Iced Beer"/>
            <Productbox image={pimage1} title="Cream Beer"/>
            <Productbox image={pimage1} title="Smoked Beer"/>
            <Productbox image={pimage2} title="Iced Beer"/>
            
        </div>

    </div>
  )
}

export default Products