import React from 'react'

class CoinPrices extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   data : [
    {
     id: "Bitcoin",
     price: "1"
    },
    {
     id: "Ethereum",
     price: "2"
    }
   ]
  }
 }
  render () {
   return (
    <div>
      
    </div>
  )
 }
}

export default CoinPrices