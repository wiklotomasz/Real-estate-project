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
      neighbourhood: 'all',
      homeType: 'all',
      bedrooms: 0,
      minPrice: 0,
      maxPrice: 500000,
      minFloorSpace: 0,
      maxFloorSpace: 50000,
      elevator: false,
      swimmingPool: false,
      finishedBasement: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData: []
    }
    this.change = this.change.bind(this);
    this.filterData = this.filterData.bind(this);
    this.populateForms = this.populateForms.bind(this);
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
      && item.floorSpace <= this.state.maxFloorSpace
      && item.bedrooms >= this.state.bedrooms);
    })

    if (this.state.neighbourhood !== 'all') {
      newData = newData.filter((item) => {
        return item.neighbourhood === this.state.neighbourhood;
      })
    }

    if (this.state.homeType !== 'all') {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType;
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms = () => {
    // neighbourhood
    var neighbourhoods = this.state.listingsData.map((item) => {
      return item.neighbourhood;
    });
    neighbourhoods = new Set(neighbourhoods);
    neighbourhoods = [...neighbourhoods];


    // homeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType;
    });
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];

    // bedrooms
    var bedroomsList = this.state.listingsData.map((item) => {
      return item.bedrooms;
    });
    bedroomsList = bedroomsList.sort();
    bedroomsList = new Set(bedroomsList);
    bedroomsList = [...bedroomsList];

    this.setState({
      populateFormsData: {
        homeTypes,
        neighbourhoods,
        bedroomsList
      }
    }, () => {
      console.log(this.state.populateFormsData)
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
        <Listings listingsData={this.state.filteredData} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
