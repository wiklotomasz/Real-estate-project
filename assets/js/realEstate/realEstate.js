import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';

class App extends Component {
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
    return (<div>
      <Header />
      Real Estate
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
