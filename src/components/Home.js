import React from 'react'
import './HomeStyle.css'
// import { createApi } from 'unsplash-js';
// const unsplash = createApi({
//   accessKey: 'HmkoipsbzjqX9KXdXTGZ1tioG9kLTtrW56q4hLiJCn8',
//   // `fetch` options to be sent with every request
//   headers: { 'X-Custom-Header': 'foo' },
// });

// unsplash.search.getPhotos({
//   query: '',
//   page: 1,
//   perPage: 10,
//   color: 'green',
//   orientation: 'portrait',
// }).then(result=>{
//   console.log(result)
// });
// unsplash.photos.getRandom({
//   count: 10,
// }).then(result=>{
//     console.log(result)
//   });

export default function Home() {

  return (
    <div className='container'>
      
      <div className="Heading">
        <h1>Explore Your Thing</h1>
      </div>

      <div className="main-categories">
       
        <a href="#"  className='Travel'>
          <p className='Text'>Travel</p>
          </a>
        <a href='#' className="Space">
          <p className='Text'>Space</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="Landscapes">
          <p className='Text'>Landscapes</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
      </div>

      <div className="other-categories">
        <a href='#' className="animals">
        <p className='Text'>animals</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="Pop">
        <p className='Text'>Cinema</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="SciFi">
        <p className='Text'>Scifi</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="Inspiring">
        <p className='Text'>Inspiring</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="Seasonal">
        <p className='Text'>Seasonal</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="artistic">
        <p className='Text'>Artisitc</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="anime">
        <p className='Text'>Anime</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
        <a href='#' className="fantasy">
          <p className='Text'>Fantasay</p>
          {/* <a href=""><button className='Explorer'>Explore</button></a> */}
        </a>
      </div>
    </div>
  )
}
