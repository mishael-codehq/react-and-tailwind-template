/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";

// top
//     sm:w-full
//     bg-cool-gray
//     w-[90%]
//     m-auto
//     mt-[-82px]
//     sm:mt-0
//     "

class Content extends React.Component {
	state = {
		pageLinks: {
			yourInfo: "http://127.0.0.1:5500/Data/your-info.json",
			SelectPlan: "http://127.0.0.1:5500/Data/select-plan.json",
			addOns: "http://127.0.0.1:5500/Data/add-ons.json",
			summary: "http://127.0.0.1:5500/Data/summary.json",
		},

		data: {},
	};

	getPage(id) {
		const { yourInfo, SelectPlan, addOns, summary } = this.state.pageLinks;

		let pages = [yourInfo, SelectPlan, addOns, summary];

		if (typeof id === "number") {
			return pages[id - 1];
		} else if (typeof id === "string") {
			return id;
		}

		return "fuck";
	}
	componentDidUpdate(prevProps) {
		console.log("pageid", this.props.pageid);
		let getData = async () => {
			try {
				let response = await axios.get(this.getPage(this.props.pageid));
				this.setState({
					data: response.data,
				});
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}

	componentDidMount() {
		console.log("pageid", this.props.pageid);
		let getData = async () => {
			try {
				let response = await axios.get(this.getPage(this.props.pageid));
				this.setState({
					data: response.data,
				});
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}

	render() {
		let { data } = this.state;
		return (
			<span
				className="
				   sm:w-full
				   bg-white
				   w-[90%]
				   m-auto
				   mt-[-82px]
				   rounded
				   sm:mt-0
				   px-4
				   py-4
			">
				<div
					className="
				flex
				flex-col
				gap-2
				header
				mt-2
				shrink-0
				w-full
				">
					<h1
						className="
					capitalize
					text-marie-blue
					m-0
					">
						{data.tittle}
					</h1>
					<p
						className="
						first-letter:capitalize
					text-cool-gray
					text-sm
					m-0
					">
						{data.description}
					</p>
				</div>
				<div className="mt-4">content</div>
			</span>
		);
	}
}

function dumb(props) {
	console.log(props);
}

export default Content;
