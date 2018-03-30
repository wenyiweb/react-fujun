import PropTypes from 'prop-types'
import classNames from 'classnames'
import React from 'react'
import Scroll from '../../base/scroll/scroll'
import ItemImg from '../../base/item-img/item-img'
import ItemInfo from '../../base/item-info/item-info'
import ApplyPersons from '../../base/apply-persons/apply-persons'
import Loading from '../../base/loading/loading'
import listViewStyles from './list-view.css'

const ListView = props => {
	const {
		listType,
		data,
		scrollEnd,
		nomore,
		pullup
	} = props
	return (
		<Scroll
			className={props.className}
			pullup={pullup}
			data = {data}
			scrollEnd = {scrollEnd}>
			<ul>
				{
					data.length > 0 &&
					data.map((item, index) => (
						<li key={index} className={listViewStyles.tryItem}>
							<div onClick={() => {props.selectItem(item)}}>
								<ItemImg item={item} listType={listType}/>
								<div className={listViewStyles.infos}>
									<ItemInfo item={item} listType={listType}/>
									{
										listType === 3 
										? (<div className={listViewStyles.applyBtn}>
											<span className={listViewStyles.toapply}>免费申请</span></div>) 
										: (<div className={listViewStyles.reportNum}>
											{
												item.list.length > 0 
												? (<span>{item.reportsnum}篇试用报告</span>)
						                		: (<span>未公布中奖名单</span>)
											}				                
					              			</div>)
									}
								</div>
							</div>
							{
								item.list.length > 0 
								? (
									<div className={listViewStyles.applyPers} onClick={() => {props.toApplyList(item)}}>
									<ApplyPersons list={item.list} showmore={true} limit={5} className={listViewStyles.persons}></ApplyPersons>
										{
											listType === 3
											? (<span className={listViewStyles.applyNum}>{item.try_applys}人已申请</span>)
											: (
												item.list.length > 0
												? (<div className={listViewStyles.toViewList}><span>中奖名单已公布</span><i className={listViewStyles.originArrow}></i></div>)
												: (null)
											)
										}
										
									</div>
								)
								: (null)
							}
						</li>
					))
				}
				{
					data.length ? (<div className={classNames(listViewStyles.listLoadTip,
					{[listViewStyles.nomore]: nomore})}>{nomore ? '全部数据加载完毕' : '加载中...'}</div>) : (null)
				}				
			</ul>
			{
				!data.length 
				? (<div className={listViewStyles.loadingContainer}>
						<Loading />
					</div>)
				: (null)
			}
		</Scroll>
	)
}

ListView.propTypes = {
	listType: PropTypes.number,
	data: PropTypes.array,
	scrollEnd: PropTypes.func,
	pullup: PropTypes.bool,
	nomore: PropTypes.bool,
}
export default ListView
