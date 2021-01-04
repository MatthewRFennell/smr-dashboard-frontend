import React, { Component } from "react"
import CardColumns from "react-bootstrap/CardColumns"
import { withRouter } from "react-router-dom"
import CarCard from "./CarCard"
import Card from "react-bootstrap/Card"
const backend = process.env.REACT_APP_BACKEND

class CarList extends Component {
	state = {
		cars: []
	}

	componentDidMount() {
		const { sessionId } = this.props.match.params
		fetch(`${backend}/sessions/${sessionId}/cars`)
		.then(res => res.json())
		.then((cars) => {
			this.setState({ cars: cars })
		})
	}

	render() {
		const { sessionId } = this.props.match.params
		return (
			<div>
				<CardColumns>
					{this.state.cars.map((car) => {
						return <CarCard key={car.number} id={car.number} name={car.name} sessionId={sessionId} />
					})}
				</CardColumns>
			</div>
		)
	}
}

export default withRouter(CarList)
