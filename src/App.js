import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import "./App.css";
import SessionList from "./SessionList"
import Session from "./Session"
import Car from "./Car"
import Navbar from "react-bootstrap/Navbar"
const backend = process.env.REACT_APP_BACKEND

class App extends Component {
	state = {
		sessions: []
	}

	componentDidMount() {
		console.log(`${backend}/sessions`)
		fetch(`${backend}/sessions`)
		.then(res => res.json())
		.then((cars) => {
			this.setState({ cars: cars })
		})
	}

	render() {
		const AppStyle = {
			margin: 15
		}
		return (
			<Router>
				<Navbar>
					<Navbar.Brand><h1>SpeedyMite Racing Dashboard</h1></Navbar.Brand>
				</Navbar>
				<div style={AppStyle}>
					<Switch>
						<Route path="/sessions/:sessionId/cars/:carId">
							<Car />
						</Route>
						<Route path="/sessions/:sessionId">
							<Session />
						</Route>
						<Route path="/">
							<SessionList />
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;
