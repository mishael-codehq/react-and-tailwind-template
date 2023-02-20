/** @format */

import React from "react";
import thankyouImage from "../../assets/images/icon-thank-you.svg";

function ThankYou(props) {
	return (
		<div
			className="flex
			flex-col
		items-center
		justify-center
		px-8
		pt-8
		">
			<img src={thankyouImage} alt="" className="w-10" />
			<h1 className="text-marie-blue">Thank you!</h1>
			<p className="text-center mt-0 text-sm text-cool-gray">
				{props.userName} Thanks for confirming your subscription we hope you
				have fun using our platform. if you feel you ever need support, please
				feel free to email us at mishaeldevsupport@gmail.com.
			</p>
			<h2
				className="font-lg
			text-strawberry-red text-center">
				Developed by Mishael
			</h2>
		</div>
	);
}

export default ThankYou;
