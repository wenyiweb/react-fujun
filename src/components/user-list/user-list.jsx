import PropTypes from 'prop-types'
import React from 'react'
import Back from '../../base/back/back'
import UserList from '../../base/user-list/user-list'
import listStyle from './user-list.css'

const UserListComponent = props => {
	const {
		title,
		data,
		nomore,
		applyType
	} = props
	return (
		<div className={listStyle.container}>
			<div className={listStyle.header}>
				<Back className={listStyle.iconBack} onClick={() => {props.onClick()}}/>
				<h1 className={listStyle.title}>{title}</h1>
			</div>
			<div className={listStyle.applyWrapper}>
				<UserList className={listStyle.listWrapper} applyType={applyType} data={data} nomore={nomore} scrollEnd={props.scrollEnd}/>
			</div>
		</div>
	)
}

UserListComponent.propTypes = {
	applyType: PropTypes.number
}
export default UserListComponent