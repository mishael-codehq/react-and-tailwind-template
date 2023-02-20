/** @format */
import React, { useState, useEffect } from "react";

function AddOns(props) {
	let [cards, setcards] = useState([
		{
			id: 1,
			label: "Online Service",
			description: "Access to multiplayer games",
			price: {
				month: 1,
				year: 10,
			},
			isSelected: false,
		},
		{
			id: 2,
			label: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: {
				month: 2,
				year: 20,
			},
			isSelected: false,
		},
		{
			id: 3,
			label: "Customizable Profile",
			description: "Custom theme on your profile",
			price: {
				month: 2,
				year: 20,
			},
			isSelected: false,
		},
	]);

	function getCardStyles(checked) {
		console.log(checked);
		if (checked) {
			return `
		flex
		justify-between
		items-center
		p-2
		rounded
		border-solid
		border-purplish-blue
		border-[1.82px]
	bg-magnolia
		`;
		} else {
			return `
		flex
		justify-between
		items-center
		p-2
		border-solid
		border-[transparent]
		border-2
		rounded
	bg-magnolia
		`;
		}
	}
	function getCheckBtnstyles() {
		return `
		border-cool-gray
		outline-none
		focus:bg-purplish-blue
		cursor-pointer
		w-4
		rounded-lg`;
	}
	function handleCardSelection(it) {
		let updatedcards = cards.map((card) => {
			if (card.id === it.id) {
				return { ...card, isSelected: !card.isSelected };
			}
			return card;
		});

		setcards(updatedcards);

		let sortedCards = updatedcards.filter((card) => {
			if (card.isSelected === true) {
				return card;
			}
		});

		props.onSetAddons(sortedCards);
	}

	return (
		<React.Fragment>
			<h1
				className="
                p-0 
                m-0
                text-marie-blue
            ">
				Add-Ons
			</h1>
			<p
				className="
                p-0 
                m-0  
                mb-6
                text-cool-gray
                text-sm
            ">
				Add ons help enhance your gaming experince!
			</p>
			<div
				className="flex
				flex-col
			gap-2
			">
				{cards.map((card) => (
					<article
						key={card.id}
						onClick={() => handleCardSelection(card)}
						className={getCardStyles(card.isSelected)}>
						<span
							className="
				gap-4
				flex
				">
							<input
								type="checkbox"
								checked={card.isSelected}
								className={getCheckBtnstyles()}
							/>
							<span>
								<h2
									className="
					text-base
					m-0
					text-marie-blue
					">
									{card.label}
								</h2>
								<p
									className="
					text-xs
					m-0
					text-cool-gray
					">
									{card.description}
								</p>
							</span>
						</span>
						<span
							className="
				text-sm
				text-purplish-blue
				">
							{props.period === "mo" ? (
								<p>
									+${card.price.month}/{props.period}
								</p>
							) : (
								<p>
									+${card.price.year}/{props.period}
								</p>
							)}
						</span>
					</article>
				))}
			</div>
		</React.Fragment>
	);
}

export default AddOns;
