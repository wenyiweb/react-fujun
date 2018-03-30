import * as types from './action-types'

export function setTryItem (tryitem) {
	return {
		type: types.SET_TRYITEM,
		tryitem
	}
}

export function setAnimateStatus(status) {
	return {
		type: types.SET_ANIMATE_STATUS,
		status
	}
}