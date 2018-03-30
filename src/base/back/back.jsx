import React from 'react'
import backStyle from './back.css'

const Back = props => (
	<div className={backStyle.back} onClick={props.onClick}></div>
)
export default Back