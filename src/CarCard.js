import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import Card from "react-bootstrap/Card"

class CarCard extends Component {
	render() {
		return (
			<Link to={`/sessions/${this.props.sessionId}/cars/${this.props.id}`}>
				<Card>
					<Card.Body>
						<Card.Title>{this.props.name}</Card.Title>
					</Card.Body>
				</Card>
			</Link>
		)
	}
}

export default CarCard
