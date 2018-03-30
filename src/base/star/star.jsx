import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'
import React,{Component} from 'react'
import classNames from 'classnames'
import starStyle from './star.css'

const LENGTH = 5;
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';

class Star extends Component {
	constructor(props){
		super(props)
		bindAll(this,['itemClasses'])
	}
	itemClasses() {
	    let result = [];
	    let score = Math.floor(this.score * 2) / 2;
	    let hasDecimal = score % 1 !== 0;
	    let integer = Math.floor(score);
	    for (let i = 0; i < integer; i++) {
	      result.push(CLASS_ON);
	    }
	    if (hasDecimal) {
	      result.push(CLASS_HALF);
	    }
	    while (result.length < LENGTH) {
	      result.push(CLASS_OFF);
	    }
	    return result;
	}
	render() {
		console.log(this.itemClasses())
		return (
			<div className={classNames(starStyle.star,starStyle['star-'+this.props.size])}>
				{
					this.itemClasses().map((itemClass, index) => (
						<span className={classNames(starStyle.starItem, itemClass)} key={index}></span>
					))
				}
			</div>
		)
	}
}

Star.propTypes = {
	size: PropTypes.number,
	score: PropTypes.number
}
export default Star