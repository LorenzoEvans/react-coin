import React from 'react'

export default function SingleCoin(props) {
  return (
    <div>
     <h1>{props.id}</h1>
     <h3>${props.price}</h3>
    </div>
  )
}
