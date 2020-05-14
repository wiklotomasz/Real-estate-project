import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      minPrice: 0,
      maxPrice: 500000,
      minFloorSpace: 0,
      maxFloorSpace: 50000,
      elevator: false,
      swimmingPool: false,
      finishedBasement: false,
      gym: false,
      filteredData: listingsData
    }
    this.change = this.change.bind(this);
    this.filteredData = this.change.bind(this);
  }

  change = (event) => {
    console.log(event.target);
    const name = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filterData();
    })
  }

  filterData = () => {
    var newData = this.state.listingsData.filter((item) => {
      return (item.price >= this.state.minPrice 
      && item.price <= this.state.maxPrice 
      && item.floorSpace >= this.state.minFloorSpace 
      && item.floorSpace <= this.state.maxFloorSpace);
    })

    this.setState({
      filteredData: newData
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
        <Listings listingsData={this.state.filteredData} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
