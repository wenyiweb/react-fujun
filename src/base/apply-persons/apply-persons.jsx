import PropTypes from 'prop-types'
import React from 'react'
import appStyles from './apply-persons.css'


const ApplyPersons = props => {
	const {
		list,
		limit,
	//	showmore
	} = props

	return (
		<div className={props.className}>
			{
				list && list.length > 0 && list.map((item, index) => (
					<span className={appStyles.perimg} key={index}>
						{
							index < limit
							? <img src={item} alt={index}/>
							: (null)
						}
					</span>
				))
			}
			{
				(list.length > limit - 1) && <span className={appStyles.iconmore}></span>
			}
		</div>
	)
}

ApplyPersons.defaultProps = {
	list: [],
	limit: 5,
	//showmore: true
}
ApplyPersons.propTypes = {
	list: PropTypes.array,
	limit: PropTypes.number,
	//showmore: PropTypes.bool
}

export default ApplyPersons