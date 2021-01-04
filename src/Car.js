import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { DateTime } from "luxon"
const backend = process.env.REACT_APP_BACKEND

class Car extends Component {
	state = {
		car: {
			name: "",
			pitstops: [],
		}
	}

	componentDidMount() {
		const { sessionId, carId } = this.props.match.params
		fetch(`${backend}/sessions/${sessionId}/cars/${carId}`)
		.then(res => res.json())
		.then((car) => {
			this.setState({ car: car })
		})
	}

	render() {
		return (
			<div>
				<h2>{this.state.car.name}</h2>
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Pitstop</th>
							<th scope="col">Time in pits</th>
						</tr>
					</thead>
					<tbody>
						{this.state.car.pitstops.map((pitstop, i) => {
							const startTime = DateTime.fromISO(pitstop.startTime)
							const endTime = DateTime.fromISO(pitstop.endTime)
							const timeInPits = endTime.diff(startTime)
							return <tr><th scope="row">{i + 1}</th><td>{timeInPits.toFormat("m:ss")}</td></tr>
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default withRouter(Car)
