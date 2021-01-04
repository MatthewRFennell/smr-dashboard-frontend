import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import CarList from "./CarList"
const backend = process.env.REACT_APP_BACKEND

class Car extends Component {
	state = {
		car: {}
	}

	componentDidMount() {
		const { sessionId, carId } = this.props.match.params
		console.log("Hello")
		console.log(`${backend}/sessions/${sessionId}/cars/${carId}`)
		fetch(`${backend}/sessions/${sessionId}/cars/${carId}`)
		.then(res => res.json())
		.then((car) => {
			this.setState({ car: car })
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<h2>{this.state.car.name}</h2>
				{this.state.car.pitstops.map((pitstop) => {
					return <p>{pitstop.startTime}, {pitstop.endTime}</p>
				})}
			</div>
		)
	}
}

export default withRouter(Car)
