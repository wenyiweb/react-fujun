import PropTypes from 'prop-types'
import React from 'react'
import {Route} from 'react-router-dom'
import {TransitionGroup ,CSSTransition } from 'react-transition-group'
import ListView from '../../base/list-view/list-view'
import TryingDetail from '../../containers/trying-detail'
import TryendDetail from '../../containers/tryend-detail'
import tryStyle from './try-list.css'

const TryListComponent = (props) => {
	const {
		listType,
		data,
		selectItem,
		toApplyList,
		scrollEnd,
		nomore,
		pullup
	} = props
	return (
		<div className={tryStyle.trygoods}>
			<ListView
				listType={listType}
				probeType={listType} 
				className={tryStyle.tryList}
				pullup={pullup}
				data = {data}
				nomore = {nomore}
				scrollEnd = {scrollEnd} 
				selectItem = {selectItem}
				toApplyList = {toApplyList}/>
		        <CSSTransition
		        	key={props.match.url}
			        in = {props.animateStatus}
			        classNames={{
			          	appear: tryStyle.slideAppear,
			          	appearActive: tryStyle.slideAppearActive,
					    enter: tryStyle.slideEnter,
					    enterActive: tryStyle.slideEnterActive,
					    exit: tryStyle.slideLeave,
					    exitActive: tryStyle.slideLeaveActive
					}}
					onExited={props.animateExited}
		            timeout={300}>
		            <Route 
						path={`${props.match.url}/:id`}
						component={props.match.url === "/trying" ? TryingDetail : TryendDetail}/>
		        </CSSTransition>
		</div>
	)
}
/**
 *     mountOnEnter
					  unmountOnExit
 *   <Route 
		path="/trying/:id"
		component={TryingDetail}/>
	<Route 
		path="/tryend/:id"
		component={TryendDetail}/>
 * @type {Object}
 */
TryListComponent.propTypes = {
	listType: PropTypes.number,
	data: PropTypes.array,
	scrollEnd: PropTypes.func,
	selectItem: PropTypes.func,
	toApplyList: PropTypes.func,
	pullup: PropTypes.bool,
	nomore: PropTypes.bool,
}
export default TryListComponent