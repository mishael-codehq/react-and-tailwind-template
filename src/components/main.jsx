/** @format */

import React, { useState, useEffect } from "react";
import Content from "./content";
import ThankYou from "./pages/thankyou";

class MainSection extends React.Component {
	state = {
		ThankYou: null,
		userName: "",
	};

	setUserName = (name) => {
		this.setState(
			{
				userName: name,
			},
			() => console.log(this.state.userName)
		);
	};

	getNextBtn = () => {
		let next = (
			<a
				href="#"
				className="
	text-sm
	bg-marie-blue
	rounded
	px-4
	py-2
	text-white
	"
				onClick={this.props.incrementPage}>
				Next Step
			</a>
		);

		let confirm = (
			<a
				href="#"
				onClick={() => {
					this.setState({
						ThankYou: <ThankYou userName={this.state.userName} />,
					});
				}}
				className="
	text-sm
	bg-purplish-blue
	rounded
	px-4
	py-2
	text-white
	">
				Confirm
			</a>
		);

		if (this.props.page === 4) {
			return confirm;
		} else {
			return next;
		}
	};

	render() {
		return (
			<section
				className="
		bg-magnolia
		sm:bg-white
		grow
		sm:flex
		sm:items-center
		">
				<div
					className="
					contain
					flex
					flex-col
					justify-between
					w-full
					h-full
					sm:h-[90%]
					sm:w-[80%]
					m-auto
					">
					<Content
						ThankYouPage={this.state.ThankYou}
						pageid={this.props.page}
						setUserName={this.setUserName}
						setPage={this.props.setPage}
					/>
					{this.state.ThankYou ? (
						<div></div>
					) : (
						<div
							className="
						bottom
						w-full
						h-[12vh]
						flex
						items-center
						justify-between
						px-[5vw]
						sm:px-0
						bg-white
						">
							{this.props.page === 1 ? (
								<a></a>
							) : (
								<a
									href="#"
									className="
							text-sm
							text-cool-gray
							"
									onClick={this.props.decrementPage}>
									Go back
								</a>
							)}
							{this.getNextBtn()}
						</div>
					)}
				</div>
			</section>
		);
	}
}

export default MainSection;
