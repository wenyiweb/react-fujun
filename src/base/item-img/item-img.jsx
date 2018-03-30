import Protypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import imgStyle from './item-img.css'

const ItemImg = props => {
  const {
    item,
    listType,
    ptype 
  } = props
  return (
    <div className={imgStyle.img}>
      <img src={item.product.cover} alt={item.product.title}/>
      {
        listType === 3 ?
        (
          <div className={imgStyle.remainDay}>
            {
              item.try_end_date ? (<span>距离结束<br/>{item.try_end_date}</span>) : (<span>距离结束<br/>{item.try_span_time}</span>)
            }
          </div>
        )
        :(
          <div className={
            classNames(
              imgStyle.remainDay,
              {
                [imgStyle.end]: ptype === 'end'
              }
            )}>
            {
              ptype !== 'end' ? <span>已结束<br/>{item.try_applys}人申请</span> : <span>已结束</span>            
            }
          </div>
          )
      }
    </div>
  )
}
ItemImg.propTypes = {
  item: Protypes.object,
  listType: Protypes.number,
  ptype: Protypes.string
}
export default ItemImg