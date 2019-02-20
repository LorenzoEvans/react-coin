import React from 'react'
import SingleCoin from './SingleCoin'
import axios from 'axios'

class CoinPrices extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   data : []
  }
 }

 componentDidMount() {
  axios
   .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
   .then(response => {
    this.setState({
     data: response.data
    })
   })
   .catch((err) => {

   })
 }
  render () {
   return (
   <div>
    {
     this.state.data.map((coin, index) => <SingleCoin 
     key={index}
     id={coin.id}
     price={coin.price}
      />
     )
    }
   </div>
  )
 }
}

export default CoinPrices