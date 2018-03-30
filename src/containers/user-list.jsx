import PropType from 'prop-types'
import bindAll from 'lodash.bindall'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserListComponent from '../components/user-list/user-list'
import {getApplyList} from '../api/tryapi'
import {OK_CODE} from '../api/config'

@withRouter
@connect(state => ({
	tryItem: state.tryItem
}))
class UserList extends Component {
	constructor(props) {
		super(props)
		bindAll(this,[
			'_getApplyList',
			'scrollEnd',
			'back'
		])
		this.state = {
	        list: [],
	        pageNum: 1,
	        isLoading: false,
	        nomore: false,
	        firstLoad: true
        }
	}
	componentDidMount() {
		this.setState({
			list: []
		})
       this._getApplyList();
	}
	_getApplyList() {
		if (!this.props.tryItem.id) {
      	 this.props.history.push('/trying')
          return;
        }
		if(!this.state.isLoading) {
			this.setState({
				isLoading: true
			})
			getApplyList(this.state.pageNum, this.props.applyType, this.props.tryItem.id).then((res) => {
				this.setState({
					isLoading: false
				})
				if(res.code === OK_CODE) {
					if(res.data.length < 10 && this.state.firstLoad) {
						this.setState({
							nomore: true
						})
					}
					this.setState({
						firstLoad: false
					})
					if(res.data.length === 0) {
						this.setState({
							isLoading: true,
							nomore: true
						})
					} else {
						this.setState({
							list: this.state.list.concat(...res.data)
						})
					}
				}else{
					if(res.data.length === 0) {
						this.setState({
							isLoading: true,
							nomore: true
						})
					}
				}
			})
		}
	}
	scrollEnd() {
		var pn = this.state.pageNum + 1;
		this.setState({
			pageNum: pn
		})
		this._getApplyList()
	}
	back() {
		this.props.history.goBack()
	}
	render() {
		return (
			<UserListComponent 
			onClick={this.back}
			nomore={this.state.nomore}
			scrollEnd={this.scrollEnd}
			applyType={this.props.applyType} 
			title={this.props.title} 
			data={this.state.list}/>
		)
	}
}
UserList.propTypes = {
	applyType: PropType.number
}
export default UserList