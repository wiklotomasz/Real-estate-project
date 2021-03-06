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
      populateFormsData: [],
      sortBy: 'price-dsc',
      view: 'box',
      search: ''
    }
    this.change = this.change.bind(this);
    this.changeView = this.changeView.bind(this);
    this.filterData = this.filterData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  componentWillMount() {

    const listingsData = this.state.listingsData.sort((a, b) => {
      return (a.price > b.price) ? 1 : -1
    })

    this.setState({
      listingsData
    })
  }

  change = (event) => {
    const name = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    }, () => {
      this.filterData();
    })
  }

  changeView = (view) => {
    this.setState({
      view
    });
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

    if(this.state.sortBy == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return (a.price >= b.price) ? 1 : -1
      })
    }

    if(this.state.sortBy == 'price-asc') {
      newData = newData.sort((a, b) => {
        return (a.price <= b.price) ? 1 : -1
      })
    }

    if(this.state.search !== '') {
      newData = newData.filter((item) => {
        var neighbourhood = item.neighbourhood.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var n = neighbourhood.match(searchText);

        if (n !== null) {
          return true;
        }
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
    neighbourhoods = neighbourhoods.sort();


    // homeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType;
    });
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes = homeTypes.sort();

    // bedrooms
    var bedroomsList = this.state.listingsData.map((item) => {
      return item.bedrooms;
    });
    bedroomsList = new Set(bedroomsList);
    bedroomsList = [...bedroomsList];
    bedroomsList = bedroomsList.sort();

    this.setState({
      populateFormsData: {
        homeTypes,
        neighbourhoods,
        bedroomsList
      }
    });
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
        <Listings globalState={this.state} change={this.change} changeView={this.changeView} listingsData={this.state.filteredData} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
