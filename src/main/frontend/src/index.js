import React from "react";
import ReactDOM from "react-dom";

class Mrt extends React.Component {
	constructor() {
		super();
		this.state = {
				records: [],
		}
	}
	componentDidMount() {
		fetch("http://localhost:8080/template/123")
		.then(results => {
			return results.json();
		}).then(data => {
			console.log('Data: ' + data)
			/**let records =  data.map((rec) => {
				console.log(rec[0]);
				console.log(rec[1]);
				console.log(rec[2]);
				return (
						<div>
							<div>Hole_ID: {rec[0]}<br /></div>
							<div>Drilling_Code: {rec[1]}<br /></div>
							<div>Dip: {rec[2]}<br /></div>
						</div>
				);
			})
			console.log('records: ' + records);
			
			console.log("state:", this.state.records); */
			/**Object.keys(data).forEach(function(key) {
				console.log(key, data[key]);
			});*/
			Object.entries(data).forEach(
				([key, value]) => console.log(key, value)
			);
			let records = Object.keys(data).map(function(keyName, keyIndex) {
				console.log('records: ' + keyName, data[keyName]);
				return (
						<div key={keyIndex}>
							<h3>{keyName}</h3>
							<TemplateList templateList={data[keyName]} />
						</div>
				);
			});
			console.log(records);
			this.setState({records: records}, (prevState, records) => ({
				records: records
			}));
			console.log('after', this.state.records);
		})
	}
	
	render() {
		return (
				<div>
					<h2>Mrt Report</h2>
					<div>
						{this.state.records}
					</div>
				</div>
		);
	}
}

class TemplateList extends React.Component {
	render() {
		console.log(this.props.templateList);
		return (
				<div>
					{this.props.templateList.map((record, index) => (
//							console.log('record ' + index + ': ' +record);
							<p key={index}>
								<RecordList recordList={record} />
							</p>
					))}
				</div>
		);
	}
}

class RecordList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				records: [],
		}
	}
	componentDidMount() {
		Object.entries(this.props.recordList).forEach(
				([key, value]) => console.log('this.props', key, value)
			);
		let records = Object.keys(this.props.recordList).map(
				(key) => {
					return this.props.recordList[key]
					});
		console.log('new records: ', records);
		this.setState({records: records}, (prevState, records) => ({
			records: records
		}));
		console.log('state.record:', this.state.records);
	}
	render() {
		console.log('attr: ', this.state.records);
		return (
				<div>
					{this.state.records.map((record, index) => (
						<p key={index}>
							{record}
						</p>
				))}
				</div>
		);
	}
}

ReactDOM.render(
    <Mrt />,
    document.getElementById("root"));