import React, {Component} from 'react'
import HeaderComponent from '../components/header/header'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
	      navList: [{
	        url: '/trying',
	        text: '进行中',
	        selected: true
	      }, {
	        url: '/tryend',
	        text: '已结束',
	        selected: false
	      }]
	    }
	}
	render() {
		return (
			<HeaderComponent 
				navList={this.state.navList} />
		)
	}
}
export default Header