import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'
import classNames from 'classnames'
import React,{Component} from 'react'
import infoStyles from './item-info.css'

class ItemInfo extends Component {
	constructor(props) {
		super(props)
		bindAll(this,['onClick'])
	}
	onClick() {
		this.props.onClick();
	}
	render() {
		return (
			<div>
				<h1 className={infoStyles.title}>{this.props.item.product.title}</h1>
				<div className={infoStyles.info}>
					<div className={infoStyles.tags}>
						<span className={classNames(infoStyles.t,infoStyles.gz)}>{this.props.item.is_trial_product ? '试用装' : '正装'}{this.props.item.spec}</span>
						<span className={classNames(infoStyles.t,infoStyles.price)}>{this.props.item.price === 0 ? '未知' : '￥'+this.props.item.price}</span>
						<span className={classNames(infoStyles.t,infoStyles.amount,{
							[infoStyles.gray]: this.props.listType === 4
						})}>{this.props.item.amount}份</span>
						{
							this.props.ptype === 'end'
							? (
								<span className={infoStyles.applyNum} onClick={this.onClick}>
									<span>{this.props.item.applayed.applay_num}人已申请</span>
									<i className={infoStyles.originArrow}></i>
								</span>
							)
							: (null)
						}
					</div>
				</div>
			</div>
		)
	}
}

ItemInfo.propTypes = {
	item: PropTypes.object.isRequired,
	listType: PropTypes.number,
	ptype: PropTypes.string,
	onClick: PropTypes.func
}
export default ItemInfo