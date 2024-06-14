import './App.css';
import React, { Component } from 'react';
import CardSection from './CardSection';
import Header from './Header';



class App extends Component {

  constructor() {

    super();
    this.state = {
      id: 'bitcoin',
      Data: {}

    }

  }



  fetchdata = async () => {

    const data = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
    const JsonData = await data.json();

    this.setState({ id: 'sulaena', Data: JsonData })

  }

  componentDidMount() {

    this.fetchdata();

  }


  render() {
    return (
      <div>

        {/* {console.log(this.state.Data.market_data)} */}


        <Header />
        <CardSection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""} mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage : ""} ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}  sentiment={ this.state.Data.sentiment_votes_up_percentage} high24={ this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""} low24 ={this.state.market_data ? this.state.market_data.low_24h["usd"]: ""}
        />


      </div>
    );
  }
}

export default App;
