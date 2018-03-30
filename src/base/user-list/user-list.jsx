import PropTypes from 'prop-types'
import classNames from 'classnames'
import React from 'react'
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import listStyle from './user-list.css'

const UserList = props => {
	const {
		data,
		nomore,
		scrollEnd,
		className
	} = props
	return (
		<Scroll 
			className={classNames(listStyle.applyList,className)} 
			data={data} 
			scrollEnd={scrollEnd} 
			pullup={true}>
			<ul>
				{
					data.length > 0 && data.map((item, index) => (
						<li className={listStyle.applyItem} key={index}>
							<div className={listStyle.avatar}>
								<img src={item.avatar} alt={index}/>
							</div>
							<div className={listStyle.content}>
								<h1 className={listStyle.name}>{item.name}</h1>
								<p className={listStyle.desc}>{item.apply_content}</p>
							</div>
						</li>
					))
				}
				{
					data.length
					? (
						<div className={classNames(listStyle.listLoadTip,[listStyle.nomore]: nomore)}>
							{nomore ? '全部数据加载完毕' : '加载中...'}
						</div>
					)
					:(null)
				}
			</ul>
			{
				!data.length
				? (
					<div className={listStyle.loadingContainer}>
						<Loading />
					</div>
				):(null)
			}
		</Scroll>
	)
}
UserList.defaultPropTypes = {
	data: []
}
UserList.propTypes = {
	data: PropTypes.array,
	nomore: PropTypes.bool
}

export default UserList