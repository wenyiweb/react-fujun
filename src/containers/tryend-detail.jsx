import bindAll from 'lodash.bindall'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import TryendDetailComponent from '../components/tryend-detail/tryend-detail'
import {setAnimateStatus} from '../reducers/actions'
import {getTryDetail} from '../api/tryapi'
import {OK_CODE} from '../api/config'

@connect(state => ({
	tryItem: state.tryItem,
	animateStatus: state.animateStatus
}), {setAnimateStatus})
class TryendDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
	        detaildata: {},
	        listType: 4,
	        ptype: 'end',
	        showmore: false,
	        limit: 6
        }
        bindAll(this, [
        	'_getTryDetail',
        	'back',
        	'toWinerList',
        	'toapplyList'
        ])
	}
	componentWillMount() {
		this._getTryDetail()
	}
	_getTryDetail() {
		if(!this.props.tryItem.id) {
			this.props.history.push('/trying')
			return
		}
		getTryDetail(2, this.props.tryItem.id).then((res) => {
			if(res.code === OK_CODE) {
				res.data.product = {
	              cover: res.data.cover,
	              title: res.data.title
	            };
	            this.setState({
	            	detaildata: Object.assign({}, this.detaildata, res.data)
	            })
			}
		})
	}
	back() {
		this.props.setAnimateStatus(false)
		//this.props.history.goBack()
	}
	toWinerList() {
		if (!this.props.tryItem.id) {
		  this.props.history.push('/trying')
		  return;
		}
		this.props.history.push(`/winnerlist/${this.props.tryItem.id}`)
	}
	toapplyList() {
		if (!this.props.tryItem.id) {
		 this.props.history.push('/trying')
		  return;
		}
		this.props.history.push(`/applylist/${this.props.tryItem.id}`)
	}
	render() {
		return (
			<TryendDetailComponent 
				data={this.state.detaildata}
				back={this.back}
				toapplyList={this.toapplyList}
				toWinerList={this.toWinerList}
				listType={this.state.listType}
				ptype={this.state.ptype}
				showmore={this.state.showmore}
				limit={this.state.limit}/>
		)
	}
}
export default TryendDetail