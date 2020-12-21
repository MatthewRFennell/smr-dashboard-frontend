import React, { Component } from "react"
import "./App.css";
import SessionList from "./SessionList"
import Navbar from "react-bootstrap/Navbar"
const backend = process.env.BACKEND

class App extends Component {
	state = {
		sessions: []
	}

	componentDidMount() {
		fetch(`${backend}/sessions`)
		.then(res => res.json())
		.then((cars) => {
			this.setState({ cars: cars })
		})
		.catch(console.log)
	}

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Brand>SpeedyMite Racing Dashboard</Navbar.Brand>
				</Navbar>
				<SessionList />
			</div>
		)
	}
}

export default App;
