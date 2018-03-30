// import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import ItemImg from '../../base/item-img/item-img'
import Back from '../../base/back/back'
import ItemInfo from '../../base/item-info/item-info'
import ApplyPersons from '../../base/apply-persons/apply-persons'
import LineComponent from '../../base/line/line'
import Loading from '../../base/loading/loading'
import detailStyle from './trying-detail.css'
const TryingDetailComponent = props => {
	const {
		data,
		listType,
		showmore,
		openmore,
		limit
	} = props
	return (
		<div className={detailStyle.detailPage}>
			{
				data && data.product
				? (
					<div>
						<ItemImg item={data} listType={listType}/>
						<Back onClick={props.back}/>
						<div className={detailStyle.infos}>
							<ItemInfo listType={listType} item={data}/>
						</div>
						{
							data.applayed 
							?(
								<div className={detailStyle.applyPersons} onClick={props.toapplyList}>
									<ApplyPersons list={data.applayed.list} showmore={showmore} limit={limit} className={detailStyle.persons}/>
									<span className={detailStyle.applyNum}>{data.applayed.applay_num}人已申请</span>
								</div>
							)
							:(null)
						}
						<LineComponent ></LineComponent>
						<div className={detailStyle.productDetail}>
							<h1 className={detailStyle.title}>产品介绍</h1>
							<div className={detailStyle.desc}>
								{
									!openmore
									?(<p className={detailStyle.source}>{data.product.description}</p>)
									:(<p>{data.product.description}</p>)
								}
								<div className={classNames(detailStyle.openBtn,{[detailStyle.opened]:openmore})} onClick={props.open}></div>
							</div>
						</div>
						<LineComponent ></LineComponent>
						<div className={detailStyle.rule}>
							<h1 className={detailStyle.title}>试用规则</h1>
							<div className={detailStyle.desc}>
								{
									data.product.try_rule.map((v,i) => (
										<p key={i}>{v}</p>
									))
								}
							</div>
						</div>
					</div>
				)
				: (<div className={detailStyle.loadingContainer}><Loading /></div>)
			}
		</div>
	)
}
export default TryingDetailComponent