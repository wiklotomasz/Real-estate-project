import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<section id="filter" className="inside">
      <h4>Filter</h4>
      <select name="neighberhood" className="filters neighbourhood" onChange={this.props.change}>
        <option value="Jezyce">Jezyce</option>
        <option value="Grunwald">Grunwald</option>
        <option value="Wilda">Wilda</option>
        <option value="Piatkowo">Piatkowo</option>
      </select>
      <select name="housetype" className="filters housetype" onChange={this.props.change}>
        <option value="Ranch">Ranch</option>
        <option value="Apartment">Apartment</option>
        <option value="Studio">Studio</option>
        <option value="Room">Room</option>
      </select>
      <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        <option value="1">1 BR</option>
        <option value="2">2 BR</option>
        <option value="3">3 BR</option>
        <option value="4">4 BR</option>
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
          <span>gym</span>
          <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
        </label>
      </div>
    </section>)
  }
}
