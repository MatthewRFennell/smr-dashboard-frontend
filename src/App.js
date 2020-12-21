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
import Navbar from "react-bootstrap/Navbar"
const backend = process.env.BACKEND

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
					<Navbar.Brand>SpeedyMite Racing Dashboard</Navbar.Brand>
				</Navbar>
				<div style={AppStyle}>
					<Switch>
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
