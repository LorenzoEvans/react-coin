import React from 'react'
import SingleCoin from './SingleCoin'
import axios from 'axios'

class CoinPrices extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   data : [{
    volume: ''
   }]
  }
 }

  fetchPrice = () => {  
   axios
   .get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=USD')
   .then(response => {
     console.log(response)
    this.setState({
     data: response.data.Data,
    })
   })
   .catch((err) => {
    console.log(err)
   })}
   
 componentDidMount() {
 
  //  this.interval = setInterval(() => this.fetchPrice(), 60 * 100)
   this.fetchPrice()
 }
  render () {
    console.log(this.state.data)
   return (
   <div>
    {
    //  this.state.data.map((coin, index) => <SingleCoin 
    //  key={index}
    //  id={coin.id}
    //  name={coin.name}
    //  price={coin.price}
    //  symbol={coin.symbol}
    //  rank={coin.rank}
    //  price_usd={coin.price_usd}
    //  price_btc={coin.price_btc}
    //  market_cap_usd={coin.market_cap_usd}
    //   />
    //  )
    }
   </div>
  )
 }
}

export default CoinPrices