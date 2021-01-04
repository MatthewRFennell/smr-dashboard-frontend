import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import CarList from "./CarList"
const backend = process.env.REACT_APP_BACKEND

class Session extends Component {
	state = {
		session: {}
	}

	componentDidMount() {
		const { sessionId } = this.props.match.params
		console.log(`${backend}/sessions/${sessionId}`)
		fetch(`${backend}/sessions/${sessionId}`)
		.then(res => res.json())
		.then((session) => {
			this.setState({ session: session })
		})
	}

	render() {
		const { sessionId } = this.props.match.params
		return (
			<div>
				<h2>{this.state.session.name}</h2>
				<CarList />
			</div>
		)
	}
}

export default withRouter(Session)
