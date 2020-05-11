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
      <select name="neighberhood" className="filters neighbourhood">
        <option>Jezyce</option>
        <option>Grunwald</option>
        <option>Wilda</option>
        <option>Piatkowo</option>
      </select>
      <select name="housetype" className="filters housetype">
        <option>Ranch</option>
      </select>
      <select name="bedrooms" className="filters bedrooms">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <div className="filters price"> 
        <span className="title">Price</span>
        <input type="text" name="min-price" />
        <input type="text" name="max-price" />
      </div>
      <div className="filters floor-space"> 
        <span className="title">Price</span>
        <input type="text" name="min-floor-space" />
        <input type="text" name="max-floor-space" />
      </div>
      <div className="filters extras">
        <span className="title">
          Extras
        </span>
        <label for="extras">
          <span>Elevators</span>
          <input name="extras" value="elevator" type="checkbox" />
        </label>
        <label for="extras">
          <span>Swimmingpool</span>
          <input name="extras" value="swimming-pool" type="checkbox" />
        </label>
        <label for="extras">
          <span>Finished basement</span>
          <input name="extras" value="finished basement" type="checkbox" />
        </label>
        <label for="extras">
          <span>gym</span>
          <input name="extras" value="gym" type="checkbox" />
        </label>
      </div>
    </section>)
  }
}
