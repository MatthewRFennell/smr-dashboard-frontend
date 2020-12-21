import React, { Component } from "react"
import { withRouter } from "react-router-dom"
const backend = process.env.BACKEND

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
			console.log(session)
			this.setState({ session: session })
		})
		.then(() => {
			console.log(this.state.session)
		})
	}

	render() {
		const { sessionId } = this.props.match.params
		return (
			<h1>My amazing session with id {sessionId}!</h1>
		)
	}
}

export default withRouter(Session)
