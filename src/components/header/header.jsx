import PropTypes from 'prop-types'
import React from 'react'
import tabStyles from './header.css'
import { NavLink } from 'react-router-dom'
const HeaderComponent = props => {
	const {
		navList
	} = props
	return (
		<div className={tabStyles.tab}>
			{
				navList.map((item, index) => (
					<div className={tabStyles.tabItem} key={item.url}>
						<NavLink activeClassName={tabStyles.active} to={item.url}>{item.text}</NavLink>
					</div>
				))
			}
		</div>
	)
}

HeaderComponent.propTypes = {
	navList: PropTypes.array
}
export default HeaderComponent
