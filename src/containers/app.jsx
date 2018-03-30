import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import AppComponent from '../components/app/app'
import {lazyload } from 'react-lazyload'
@lazyload({
  height: 200,
  offset: 100,
  debounce:300
})
class App extends Component {
  render() {
  	return (
  		<Router basename="/react-fujun">
			<AppComponent></AppComponent>
  		</Router>
  	)
  }
}
export default App

