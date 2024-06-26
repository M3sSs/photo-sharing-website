import React, { useEffect } from 'react'
import './HomeStyle2.css'



export default function Home() {
  
  return (
    <div className='Container'>
      
      <div className="Heading">
        <h1>Explore Your Thing</h1>
      </div>

      <div className="main-categories">
        
        <div id='child1'>
        <a href="/travel"  className='Travel'>
          <p className='Text'>Travel</p>
          </a>
        <a href='/space' className="Space">
          <p className='Text'>Space</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='/landscapes' className="Landscapes">
          <p className='Text'>Landscapes</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        </div>

        <div id='child2'>
        <a href='/animals' className="animals">
        <p className='Text'>animals</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='/cinema' className="Pop">
        <p className='Text'>Cinema</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        </div>

        <div id='child3'>
        <a href='/scifi' className="SciFi">
        <p className='Text'>Scifi</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='/inspiring' className="Inspiring">
        <p className='Text'>Inspiring</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        </div>
        
        <div id='child4'>
        <a href='/seasonal' className="Seasonal">
        <p className='Text'>Seasonal</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>

        <a href='/artistic' className="artistic">
        <p className='Text'>Artisitc</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        </div>

        <div id='child5'>
          <a href='/anime' className="anime">
          <p className='Text'>Anime</p>
            {/* <a href=""><button className='Explorer'>Explore</button></a> */}
          </a>
          <a href='/fantasy' className="fantasy">
            <p className='Text'>Fantasay</p>
            {/* <a href=""><button className='Explorer'>Explore</button></a> */}
          </a>
        </div>
      
        </div>
    </div>
  )
}
