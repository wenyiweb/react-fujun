import * as types from './action-types'
import states from './state'

export function tryItem(state = states.tryItem, action) {
	switch (action.type) {
		case types.SET_TRYITEM:
			return action.tryitem
		default:
			return state
	}
}

export function animateStatus(state = states.animateStatus, action) {
	switch (action.type) {
		case types.SET_ANIMATE_STATUS:
			return action.status
		default: 
			return state
	}
}