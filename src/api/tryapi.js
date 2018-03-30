import {commonParams, options} from './config'
import jsonp from '../commons/js/jsonp'
/**
 * 获取试用列表接口
 * @param pageNum
 * @param status
 * @returns {Promise.<TResult>|*}
 */
export function getTryingList(pageNum, status) {
	const url = 'https://tryapi.yoka.com/yokatry/gettrylist';
	const data = Object.assign({},commonParams,{
		status: status,
		page: pageNum
	})
	return jsonp(url, data, options)
}

/**
import axios from 'axios'

export function getTryingList(pageNum, status) {
	const url = 'https://tryapi.yoka.com/yokatry/gettrylist'
	const data = {
		status: status,
		page: pageNum,
		rnd: Math.random(),
		format: 'jsonp',
		callback: 'callback'
	}
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
**/

export function getApplyList(pageNum, applyType, tryId) {
	const url = 'http://tryapi.yoka.com/yokatry/getuserlist';
	const data = Object.assign({}, commonParams, {
		page: pageNum,
		type: applyType,
		try_id: tryId
	})
	return jsonp(url, data, options)
}

export function getTryDetail(status, tryId) {
	const url = 'https://tryapi.yoka.com/trydetail/gettrydetail';
	const data = Object.assign({}, commonParams, {
		status: status,
		try_id: tryId
	});
	return jsonp(url, data, options);
}