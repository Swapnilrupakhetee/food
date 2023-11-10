import React from 'react'
import Productbox from './Productbox'
import pimage1 from'./s1.png'
import pimage2 from'./s2.png'
import pimage3 from'./s3.png'
import pimage4 from'./s4.png'
import pimage5 from'./p5.png'
import pimage6 from'./s6.png'
import pimage7 from'./s7.png'

function Products() {
  return (
    <div id='products'>
        <h1>DRINK & ENJOY</h1>
        <div className='a-container'>
            <Productbox image={pimage1} title="Smoked Beer"/>
            <Productbox image={pimage2} title="Red label"/>
            <Productbox image={pimage3} title="Angel Shot"/>
            <Productbox image={pimage4} title="German Beer"/>
            <Productbox image={pimage5} title="Iced Beer"/>
            <Productbox image={pimage6} title="Cream Beer"/>
            <Productbox image={pimage7} title="Smoked Beer"/>
            <Productbox image={pimage2} title="Iced Beer"/>
            
        </div>

    </div>
  )
}

export default Products