import React from 'react'
import PropTypes from 'prop-types'
import loadStyle from './loading.css'
import loadImg from './loading.gif'

const Loading = props => {
	const {title} = props
	return (
		<div className={loadStyle.loading}>
			<img src={loadImg} width='24' height='24' alt='loading'/>
			<p className={loadStyle.desc}>{title}</p>
		</div>
	)
}

Loading.defaultProps = {
	title: '加载中...'
}
Loading.propTypes = {
	title: PropTypes.string
}

export default Loading