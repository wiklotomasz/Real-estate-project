import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.neighbourhoods = this.neighbourhoods.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedroomsList = this.bedroomsList.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }
  neighbourhoods() {
    if (this.props.globalState.populateFormsData.neighbourhoods !== undefined) {
      var { neighbourhoods } = this.props.globalState.populateFormsData;
      return neighbourhoods.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
    }
  }
  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes !== undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;
      return homeTypes.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
    }
  }
  bedroomsList() {
    if (this.props.globalState.populateFormsData.bedroomsList !== undefined) {
      var { bedroomsList } = this.props.globalState.populateFormsData;
      return bedroomsList.map((item) => {
        return <option key={item} value={item}>{item}+ BR</option>
      })
    }
  }
  render () {
    return (<section id="filter" className="inside">
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
        <option value="all">All neighbourhoods</option>
        {this.neighbourhoods()}
      </select>
      <select name="homeType" className="filters homeType" onChange={this.props.change}>
        <option value="all">All types</option>
        {this.homeTypes()}
      </select>
      <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        {this.bedroomsList()}
      </select>
      <div className="filters price"> 
        <span className="title">Price</span>
        <input type="text" name="minPrice" onChange={this.props.change} value={this.props.globalState.minPrice} />
        <input type="text" name="maxPrice" onChange={this.props.change} value={this.props.globalState.maxPrice} />
      </div>
      <div className="filters floor-space"> 
        <span className="title">Floor space</span>
        <input type="text" name="minFloorSpace" onChange={this.props.change} value={this.props.globalState.minFloorSpace} />
        <input type="text" name="maxFloorSpace" onChange={this.props.change} value={this.props.globalState.maxFloorSpace} />
      </div>
      <div className="filters extras">
        <span className="title">
          Extras
        </span>
        <label htmlFor="extras">
          <span>Elevators</span>
          <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="extras">
          <span>Swimmingpool</span>
          <input name="swimmingPool" value="swimmingPool" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="extras">
          <span>Finished basement</span>
          <input name="finishedBasement" value="finishedBasement" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="extras">
          <span>Gym</span>
          <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
        </label>
      </div>
    </section>)
  }
}
