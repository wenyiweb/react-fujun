import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ApplyList from '../../components/apply-list/applly-list'
import WinnerList from '../../components/winner-list/winner-list'
import Header from '../../containers/header'
import Trying from '../../components/trying/trying'
import Tryend from '../../components/tryend/tryend'

import appStyle from './app.css'
const App = props => {
	// const {children} = props
	return (
		<div>
			<Header />
			<TransitionGroup className="router-transition">
            <CSSTransition
              classNames={{
              	enter: appStyle.fadeEnter,
              	enterActive: appStyle.fadeEnterActive,
              	exit: appStyle.fadeExit,
              	exitActive: appStyle.fadeExitActive
              }}
              timeout={500}
            >
			<Switch>
				<Redirect path='/' exact to='/trying' />
				<Route path='/trying' component={Trying}/>
				<Route path='/tryend' component={Tryend}/>
			</Switch>
			</CSSTransition>
          </TransitionGroup>
			<Route path="/applylist/:id" component={ApplyList}/>
			<Route path="/winnerlist/:id" component={WinnerList}/>
		</div>
	)
}
export default App