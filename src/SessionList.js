import React, { Component } from "react"
import CardColumns from "react-bootstrap/CardColumns"
import Session from "./Session"

class SessionList extends Component {
	state = {
		sessions: []
	}

	componentDidMount() {
		fetch("https://smr-dashboard-backend.herokuapp.com/sessions")
		.then(res => res.json())
		.then((sessions) => {
			this.setState({ sessions: sessions })
		})
	}

	render() {
		const SessionListStyle = {
			margin: 10
		}
		return (
			<div style={SessionListStyle}>
				<CardColumns>
					{this.state.sessions.map((session) => {
						return <Session key={session._id} name={session.name} />
					})}
				</CardColumns>
			</div>
		)
	}
}

export default SessionList;
