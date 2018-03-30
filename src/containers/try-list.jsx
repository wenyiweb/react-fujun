import bindAll from 'lodash.bindall'
import PropTypes from 'prop-types'
import {withRouter } from 'react-router-dom'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setTryItem, setAnimateStatus} from '../reducers/actions'
import TryListComponent from '../components/try-list/try-list'
import {getTryingList} from '../api/tryapi'
import {OK_CODE} from '../api/config'

@withRouter
@connect(state => ({
	tryItem: state.tryItem,
	animateStatus: state.animateStatus
}), { setTryItem, setAnimateStatus })
class TryList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: false,
	        pageNum: 1,
	        tryingList: [],
	        nomore: false,
	        pullup: true,

		}
		bindAll(this, [
			'scrollEnd',
			'_getTryList',
			'_loadNextPage',
			'selectItem',
			'toApplyList',
			'animateExited'
		])
	}
	componentDidMount() {
		this._getTryList()
	}
	scrollEnd() {
		this._loadNextPage()
	}
	toApplyList(item) {
		if (this.props.listType === 3) {
          this.props.history.push(`/applylist/${item.id}`)
        } else {
          this.props.history.push(`/winnerlist/${item.id}`)
        }
	  this.props.setTryItem(item)
	}
	selectItem(item) {
		this.props.setAnimateStatus(true)
		if (this.props.listType === 3) {
         this.props.history.push(`/trying/${item.id}`)
        } else {
          this.props.history.push(`/tryend/${item.id}`)
        }		
    	this.props.setTryItem(item)
	}
	_loadNextPage() {
		const pn = this.state.pageNum + 1
		this.setState({
			pageNum: pn
		})
        this._getTryList();
	}
	_getTryList() {
		if(!this.state.isLoading) {
			this.setState({
				isLoading: true
			})
			getTryingList(this.state.pageNum, this.props.listType).then((res) => {
				if(res.code === OK_CODE) {
					this.setState({
						isLoading: false
					})
					if(res.data.length === 0) {
						this.setState({
							nomore: true
						})
					} else {
						this.setState({
							tryingList : this.state.tryingList.concat(...res.data)
						})
					}
				}
			})
		}
	}
	animateExited() {
		this.props.history.goBack()
	}
	render() {
		return (
			<TryListComponent
			   {...this.props}
			   animateExited = {this.animateExited}
				listType={this.props.listType}
				pullup={this.state.pullup}
				nomore={this.state.nomore}
				data={this.state.tryingList}
				scrollEnd={this.scrollEnd}
				toApplyList={this.toApplyList}
				selectItem={this.selectItem}/>			
		)
	}
}
TryList.defaultProps = {
	listType: 3
}
TryList.propTypes = {
	listType: PropTypes.number
}

export default TryList