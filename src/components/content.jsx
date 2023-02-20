/** @format */

import React, { Component } from "react";
import YourInfo from "./pages/yourInfo";
import SelectPlan from "./pages/selectplan";
import AddOns from "./pages/addons";
import Summary from "./pages/summary";
import ThankYou from "./pages/thankyou";

class Content extends Component {
	state = {
		selectedPlan: {
			label: "Arcade",
			price: 9,
		},
		selectedAddons: [],
		Period: "mo",
	};

	setPlan = (label, price) => {
		this.setState({
			selectedPlan: {
				label,
				price,
			},
		});
	};

	setAddons = (array) => {
		this.setState(
			{
				selectedAddons: array,
			},
			() => console.log(this.state.selectedAddons)
		);
	};

	setPeriod = (Period) => {
		this.setState({
			Period,
		});
	};

	getPages() {
		{
			return [
				<YourInfo onSetUserName={this.props.setUserName} />,
				<SelectPlan onSelectPlan={this.setPlan} onSetPeriod={this.setPeriod} />,
				<AddOns period={this.state.Period} onSetAddons={this.setAddons} />,
				<Summary
					period={this.state.Period}
					addOns={this.state.selectedAddons}
					plan={this.state.selectedPlan}
					setPage={this.props.setPage}
				/>,
			];
		}
	}

	render() {
		return (
			<div
				className="
		top
        sm:w-full
        bg-white
        w-[90%]
        m-auto
        mt-[-72px]
        sm:mt-0   
		p-4
		sm:p-0
		rounded-lg
		shadow-lg  
		sm:shadow-[0]
		">
				{this.props.ThankYouPage
					? this.props.ThankYouPage
					: this.getPages()[this.props.pageid - 1]}
			</div>
		);
	}
}

export default Content;
