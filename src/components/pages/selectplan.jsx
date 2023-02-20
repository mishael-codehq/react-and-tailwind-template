/** @format */
import React, { useState, useEffect } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

function SelectPlan(props) {
	let [isMonthly, setIsMonthly] = useState(true);

	let [togglerClasses, setToggleClasses] = useState("toggler");
	const [cards, setCards] = useState([
		{
			id: 1,
			image: arcade,
			label: "Arcade",
			price: {
				month: 9,
				year: 90,
			},
			isClicked: true,
		},
		{
			id: 2,
			image: advanced,
			label: "Advanced",
			price: {
				month: 12,
				year: 120,
			},
			isClicked: false,
		},
		{
			id: 3,
			image: pro,
			label: "Pro",
			price: {
				month: 15,
				year: 150,
			},
			isClicked: false,
		},
	]);

	let getToggleLabelClasses = (id) => {
		let classes = `text-sm
        text-marie-blue
        text-cool-gray`;

		if (id === "y") {
			if (isMonthly) {
				return `text-sm
                text-marie-blue`;
			} else {
				return `text-sm
                text-cool-gray`;
			}
		} else {
			if (isMonthly) {
				return `text-sm
                text-cool-gray`;
			} else {
				return `text-sm
                text-marie-blue`;
			}
		}
	};

	let setTogglerClasses = () => {
		let m = "toggler";
		let y = "toggler clicked";
		if (togglerClasses === m) {
			setToggleClasses(y);
		} else {
			setToggleClasses(m);
		}
	};

	let GetCardStyles = (isClicked) => {
		if (!isClicked) {
			return `
			flex
			sm:flex-col
			items-center
			border-cool-gray
			border-2
			border-solid
			h-fit
			max-h-16
			p-2
			gap-4
			rounded-lg
			sm:min-h-[8rem]
			sm:h-fit
			sm:w-[30%]
			sm:max-w-[7rem]
			sm:items-start
			sm:justify-between
			cards
			`;
		} else {
			return `
			flex
			sm:flex-col
			items-center
			border-purplish-blue
			border-solid
			border-2
			bg-magnolia
			h-fit
			max-h-16
			p-2
			gap-4
			rounded-lg
			sm:min-h-[8rem]
			sm:h-fit
			sm:w-[30%]
			sm:max-w-[7rem]
			sm:items-start
			sm:justify-between
			cards
			`;
		}
	};

	let handleCardSelection = (it) => {
		let updatedcards = cards.map((card) => {
			if (card.id === it.id) {
				return { ...card, isClicked: true };
			} else {
				return { ...card, isClicked: false };
			}
		});
		setCards(updatedcards);
		props.onSelectPlan(it.label, isMonthly ? it.price.month : it.price.year);
	};

	useEffect(() => props.onSetPeriod(isMonthly ? "mo" : "yr"), [isMonthly]);

	return (
		<React.Fragment>
			<h1
				className="
                p-0 
                m-0
                text-marie-blue
            ">
				Slect Your Plan
			</h1>
			<p
				className="
                p-0 
                m-0 
                mb-6
                text-cool-gray
                text-sm
            ">
				You have the option of monthly or yearly billing
			</p>
			<div
				className=" flex flex-col 
            gap-2
            sm:flex-row
            sm:justify-between ">
				{cards.map((card) => (
					<article
						key={card.id}
						className={GetCardStyles(card.isClicked)}
						onClick={() => handleCardSelection(card)}>
						<img
							src={card.image}
							alt=""
							className="
                        sm:h-10
                    "
						/>
						<span
							className="flex
                        flex-col
                        gap-0
                    ">
							<h2
								className="
                        p-0 
                        m-0 
                        text-[0.9rem]
                        text-marie-blue
                        ">
								{card.label}
							</h2>
							<span
								className="
                        p-0 
                        m-0
                        text-sm
                        text-cool-gray
                        ">
								{isMonthly ? (
									<p className="m-0"> {card.price.month}/mo</p>
								) : (
									<p className="m-0"> {card.price.year}/yr</p>
								)}
							</span>
							{isMonthly ? (
								""
							) : (
								<p
									className="
                            m-0
                            p-0
                            text-xs
                            text-marie-blue
                            ">
									2 months free
								</p>
							)}
						</span>
					</article>
				))}
			</div>

			<div
				className="flex
            h-10
            bg-alabaster
            items-center
            justify-center
            gap-2
            mt-4
            rounded-md
            ">
				<span className={getToggleLabelClasses("m")}>Monthly</span>
				<span
					onClick={() => {
						setIsMonthly(!isMonthly), setTogglerClasses();
					}}
					className="toggle-btn">
					<span className={togglerClasses}></span>
				</span>
				<span className={getToggleLabelClasses("y")}>Yearly</span>
			</div>
		</React.Fragment>
	);
}

export default SelectPlan;
