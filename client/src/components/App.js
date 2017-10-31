import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'

import Header from './header'
import Dashboard from './dashboard'
import SurveyNew from './surveys/surveyNew';

class App extends Component{
	componentDidMount() {
		this.props.fetchUser();
	}
	render(){	
		return(
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard}/>
					<Route path="/surveys/new" component={SurveyNew}/>
					<Route />
				</div>
			</BrowserRouter>
		);
	}
};

export default connect(null, actions)(App);

