import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'
import React,{Component} from 'react'
import BScroll from 'better-scroll'
/**
 * 公用组件 Scroll
 */
class Scroll extends Component {
	constructor(props){
		super(props)
		bindAll(this, [
			'_initScroll',
			'setHeight',
			'refresh',
			'scrollTo',
			'scrollToElement'
		])
		this.scroll = null
	}
	componentDidMount() {
		setTimeout(() => {
			this._initScroll()
		}, 20)
		// setTimeout(() => {
	 //      this.refresh()
	 //    }, 3000)
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.top) {
			this.setHeight()
		}
		// 刷新
		if(nextProps.data.length !== this.props.data.length) {
			setTimeout(() => {
				this.refresh()
			} ,20)
		}
	}
	_initScroll() {
		if(!this.refs.kIscroll) {
			return
		}

		this.scroll = new BScroll(this.refs.kIscroll, {
			probeType: this.props.probeType,
			click: this.props.click
		})
		if(this.props.listenScroll) {
			this.scroll.on('scroll', (pos) => {
				this.scroll(pos)
			})
		}
		if(this.props.pullup) {
			this.scroll.on('scrollEnd', () => {
				if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
					this.props.scrollEnd()
				}
			})
		}
		if(this.props.beforeScroll) {
			this.scroll.on('beforeScrollStart', () => {
				this.props.beforeScroll()
			})
		}
	}
	setHeight() {
		this.ref.kIscroll.style.top = this.props.top + 'px'
	}
	refresh() {
		this.scroll && this.scroll.refresh()
	}
	scrollTo() {
		this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
	}
	scrollToElement() {
		this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
	}
	scroll(pos) {
		this.props.scroll(pos)
	}
	render() {
		return (
			<div ref="kIscroll" className={this.props.className}>
				{this.props.children}
			</div>
		)
	}
}
// 默认值
Scroll.defaultProps = {
    probeType: 1,
    click: true,
    data: [],
    listenScroll: false,
    pullup: false,
    beforeScroll: false,
    refreshDelay: 20
};
Scroll.propTypes = {
	probeType: PropTypes.number,
	click: PropTypes.bool,
	listenScroll: PropTypes.bool,
	data: PropTypes.array,
	pullup: PropTypes.bool,
	beforeScroll: PropTypes.bool,
	refreshDelay: PropTypes.number,
	scroll: PropTypes.func
}
export default Scroll