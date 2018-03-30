import React from 'react'
import ItemImg from '../../base/item-img/item-img'
import Back from '../../base/back/back'
import ItemInfo from '../../base/item-info/item-info'
import ApplyPersons from '../../base/apply-persons/apply-persons'
import LineComponent from '../../base/line/line'
import Star from '../../base/star/star'
import Loading from '../../base/loading/loading'
import detailStyle from './tryend-detail.css'
const TryendDetailComponent = props => {
	const {
		data,
		ptype,
		listType,
		showmore,
		limit
	} = props
	return (
		<div className={detailStyle.detailPage}>
			{
				data && data.product
				? (
					<div>
						<ItemImg item={data} ptype={ptype} listType={listType}/>
						<Back onClick={props.back}/>
						<div className={detailStyle.infos}>
							<ItemInfo listType={listType} item={data} ptype={ptype} onClick={props.toapplyList}/>
						</div>
						<div className={detailStyle.applyPersons} onClick={props.toWinerList}>
							<span className={detailStyle.title}>中奖名单</span>
							<ApplyPersons className={detailStyle.persons} list={data.applayed.list} showmore={showmore} limit={limit}/>
							<div className={detailStyle.originArrow}></div>
						</div>
						<LineComponent />
						<div className={detailStyle.reportConter}>
							<h1 className={detailStyle.title}>有{data.try_report.reportsnum}份试用报告</h1>
							{
								data.try_report.reportsnum === 0
								? <p className={detailStyle.nodata}>暂无数据</p>
								: (
									<div className={detailStyle.reportList}>
										{
											data.try_report.userInfo.map((item, index) => (
												<div className={detailStyle.reportItem} key={index}>
													<div className={detailStyle.avatar}><img src={item.user_img} /></div>
													<div className={detailStyle.content}>
														<div className={detailStyle.userInfo}>
															<span className={detailStyle.username}>{item.user_name}</span>
															<div className={detailStyle.starWrapper}>
																<Star size={16} score={Number(item.score)}/>
																<div className={detailStyle.score}>{item.score}</div>
															</div>
														</div>
														{item.report_content ? <p className={detailStyle.desc}>{item.report_content}</p> : (null)}
														{
															item.report_img.length > 0
															? (
																<div className={detailStyle.picWrapper}>
																	<ul className={detailStyle.picList}>
																		{
																			item.report_img.map((pic, index) => (
																				<li className={detailStyle.picItem}><img src={'http://thumb2.yokacdn.com/p?w=200&h=200&f=' + pic}/></li>
																			))
																		}
																	</ul>
																</div>
															):(null)
														}
													</div>
												</div>
											))
										}
									</div>
								
								)
							}
						</div>
					</div>
				)
				:  (<div className={detailStyle.loadingContainer}><Loading /></div>)
			}
		</div>
	)
}

export default TryendDetailComponent