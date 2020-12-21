import React, { Component } from "react"
import Card from "react-bootstrap/Card"

class Session extends Component {
	render() {
		return (
			<Card>
				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>
				</Card.Body>
			</Card>
		)
	}
}

export default Session;
