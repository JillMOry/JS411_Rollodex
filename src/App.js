import React, { Component } from "react";
import "./App.css";

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			withDetails: false
		};
	}

	handleClick = () => {
		this.setState({
			withDetails: !this.state.withDetails
		});
	};

	render() {
		let details;

		if (!this.state.withDetails) {
			details = (
				<div className="App">
					<img
						style={{ width: "60px" }}
						src={this.props.user.picture.thumbnail}
						alt="contact person"
					></img>
					<span>
						{this.props.user.name.first} {this.props.user.name.last}
					</span>
				</div>
			);
		} else {
			details = (
				<div className="App2">
					<img
						style={{ width: "60px" }}
						src={this.props.user.picture.thumbnail}
						alt="contact person"
					></img>

					<span>
						{this.props.user.name.first} {this.props.user.name.last}
						<br></br>
						{this.props.user.location.street.number} {}
						{this.props.user.location.street.name}
						<br></br>
						{this.props.user.location.city}, {this.props.user.location.state} {}
						{this.props.user.location.postcode}
						<br></br>
						{this.props.user.email}
						<br></br>
						{this.props.user.cell}
					</span>
				</div>
			);
		}
		return (
			<div className="App" id="container">
				<div>{details}</div>

				<button style={{ fontSize: "10px" }} onClick={this.handleClick}>
					{this.state.withDetails ? "Hide Details" : "Show Details"}
				</button>
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		fetch("https://randomuser.me/api?results=25")
			.then((json) => json.json())
			.then((data) => {
				this.setState({
					users: data.results
				});
				console.log(data);
			})
			.catch((error) => console.log("parsing failed", error));
	}

	render() {
		return (
			<div>
				{this.state.users.map((userData, index) => (
					<User key={index} user={userData} />
				))}
			</div>
		);
	}
}
export default App;
