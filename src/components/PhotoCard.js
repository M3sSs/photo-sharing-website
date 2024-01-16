import React from 'react'
import './PhotoCardstyle.css'
export default function PhotoCard(props) {
  return (
    <a href='#' className='photo'>
        <img src={props.imageUrl} alt="" />
    </a>
  )
}
