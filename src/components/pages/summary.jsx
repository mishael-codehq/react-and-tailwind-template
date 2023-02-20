/** @format */
import React, { useState, useEffect } from "react";

function Summary(props) {
	let { plan, addOns, period } = props;
	console.log(plan.price);
	function getTotalPrice() {
		let total = plan.price;
		addOns.map((addOn) => {
			if (period === "mo") {
				total += addOn.price.month;
			} else if (period === "yr") {
				total += addOn.price.year;
			}
		});
		return total;
	}
	return (
		<div>
			<h1
				className="
                p-0 
                m-0
                text-marie-blue
            ">
				Finishing up
			</h1>
			<p
				className="
                p-0 
                m-0  
                mb-6
                text-cool-gray
                text-sm
            ">
				Double check if everything looks ok before confirming.
			</p>
			<div>
				<div
					className="bg-magnolia
					rounded-lg
				p-2">
					<div
						className="flex
					    justify-between
						items-center
						mb-4
						border-b-cool-gray
						border-b-[1px]
						border-solid
						border-l-magnolia
						border-t-magnolia
						border-r-magnolia
						pb-2
						">
						<span>
							<h2
								className="text-base
							m-0
							text-marie-blue
							">
								{plan.label} ( {period === "yr" ? "yearly" : "monthly"} )
							</h2>
							<span
								className="text-sm
							m-0
							underline
							text-cool-gray
							"
								onClick={() => props.setPage(2)}>
								change
							</span>
						</span>
						<span
							className="
							text-sm
						text-marie-blue
						">
							${plan.price}/{period}
						</span>
					</div>

					<div>
						{addOns.map((addon) => {
							return (
								<div
									key={addon.id}
									className="flex
							items-center
							justify-between
							">
									<h3
										className="text-sm
								m-0
								mb-2
								text-cool-gray">
										{addon.label}
									</h3>

									<span
										className="text-xs
								m-0
								text-marie-blue">
										{" "}
										${period === "mo" ? addon.price.month : addon.price.year}/
										{period}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div
				className="flex
					items-center
					justify-between
					">
				<h3
					className="
				text-sm
				text-cool-gray
				">
					Total ( per {period === "mo" ? "month" : "year"} )
				</h3>
				<span
					className="text-purplish-blue
				font-lg
				">
					${getTotalPrice()}/{period}
				</span>
			</div>
		</div>
	);
}

export default Summary;
