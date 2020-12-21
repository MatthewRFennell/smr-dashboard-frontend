import React, { Component } from "react"
import CardColumns from "react-bootstrap/CardColumns"
import SessionCard from "./SessionCard"

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
		return (
			<div>
				<CardColumns>
					{this.state.sessions.map((session) => {
						return <SessionCard key={session._id} id={session._id} name={session.name} />
					})}
				</CardColumns>
			</div>
		)
	}
}

export default SessionList;
