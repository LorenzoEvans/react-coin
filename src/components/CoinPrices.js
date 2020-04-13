import React from 'react'
import SingleCoin from './SingleCoin'
import axios from 'axios'
import Zabo from 'zabo-sdk-js';


class CoinPrices extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   data : []
  }
 }

 
 
 componentDidMount() {
   
   const exchangeRates;
   
   Zabo.init({
       clientId: process.env.ZABO_API_KEY,
       env: 'sandbox',
     }).then((zabo) => {
         zabo.currencies.getExchangeRates().then((response) => {
           this.setState(() => {
             console.log(response)
             return {data: response};
           }) = response;
         }).catch((error) => {
           console.log(error.message);
         })
     })

 }
  render () {
    console.log(this.state.data)
   return (
   <div>
    {
    //  this.state.data.map((coin, index) => <SingleCoin 
    //  key={index}
    //  name={coin.name}
    //  ticker={coin.ticker}
    //  decimals={coin.decimals}
    //  priority={coin.priority}
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