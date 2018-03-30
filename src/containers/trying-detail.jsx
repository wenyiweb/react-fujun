import bindAll from 'lodash.bindall'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import TryingDetailComponent from '../components/trying-detail/trying-detail'
import {OK_CODE} from '../api/config'
import {getTryDetail} from '../api/tryapi'
import {setAnimateStatus} from '../reducers/actions'

@connect(state => ({
	tryItem: state.tryItem,
	animateStatus: state.animateStatus
}), {setAnimateStatus})
class TryingDetail extends Component {
	constructor(props){
		super(props)
		this.state = {
			listType: 3,
	        end: 'trying',
	        detaildata: {},
	        showmore: true,
	        limit: 5,
	        openmore: false
		}
		bindAll(this, [
			'_getTryDetail',
			'open',
			'hide',
			'toapplyList',
			'back'
		])
	}
	componentWillMount(){
		this._getTryDetail()
	}
	_getTryDetail() {
		if (!this.props.tryItem.id) {
      	 this.props.history.push('/trying')
          return;
        }
        getTryDetail(1, this.props.tryItem.id).then((res) => {
          if (res.code === OK_CODE) {
            res.data.product.cover = res.data.cover;
            res.data.product.title = res.data.title;
            this.setState({
            	detaildata : Object.assign({}, this.detaildata, res.data)
            })
          }
        });
	}
	open() {
		this.setState({
			openmore: !this.state.openmore
		})
	}
	hide() {
		console.log(this.props)
	}
	back(){
		this.props.setAnimateStatus(false)
		//this.props.history.goBack()
	}
	toapplyList() {
		if (!this.props.tryItem.id) {
		 this.props.history.push('/trying')
		  return;
		}
		this.props.history.push(`/applylist/${this.props.tryItem.id}`)
	}
	render() {
		return <TryingDetailComponent 
			data={this.state.detaildata}
			listType={this.state.listType}
			showmore={this.state.showmore}
			limit={this.state.limit}
			openmore={this.state.openmore}
			back={this.back}
			toapplyList={this.toapplyList}
			open={this.open}/>
	}
}
export default TryingDetail