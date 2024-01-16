import React from 'react'

export default function UserProfile(props) {
  console.log(props.name)
  return (
    <div>
      UserProfile
      <img src={props.url} alt="" height="100px" width="100px"/>
    </div>
  )
}
